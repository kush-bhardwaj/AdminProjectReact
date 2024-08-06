import "./product.css"
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react"
import { AddProductApi, AggregateApi, CategoryApi, GetAllProdectApi, GetAllProdectWithImageApi, SubcategoryAggregate, SubCategoryApi } from "../../../API/api"

export default function AddProduct() {
    const navigate = useState()
    const [send , setSend] = useState()
    const [Subdata, setSubData] = useState()
    const [AllProduct, setAddProduct] = useState()
    const [FormData, setFormData] = useState({
        productName: "",
        productPrice: "",
        productCurrency: "",
        productUnit: "",
        productRating: "",
        productStock: "",
        productInstock: "",
        productCat_Id: "",
        productSubCatId: "",
        productDescription: "",
        productTitle: ""
    })
    const [disable, setDisable] = useState(true)
    useEffect(() => {
        CategoryApiCall();
    }, [])
    async function CategoryApiCall() {
        try {
            const res = await CategoryApi()
            setAddProduct(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const hanldeForm = async (event) => {
        event.preventDefault()
        // console.log(FormData)
        try {
            const res = await AddProductApi(FormData)
            toast.success(res.status)

            // console.log(res)
            // console.log("add response" , res)
        } catch (err) {
            console.log(err)
        }
    }
    async function SubCatApiCall(id) {

        try {
            if (id != undefined || null) {
                const res = await AggregateApi(id)
                // console.log("res",res.catAggregateData[0].subCatData)
                // console.log("res",res)
                setSubData(res.catAggregateData[0].subCatData)
                //    console.log("Subdata",Subdata)
            }

        } catch (err) {
            console.log(err)

        }

    }
    const HandleChange = (event) => {
        validation()
        setFormData({ ...FormData, [event.target.name]: event.target.value })
        if (FormData.productCat_Id !== null || undefined) {
            if (event.target.name === "productCat_Id")
                SubCatApiCall(event.target.value)
        }
        // if(event.target.name !== "productPrice"){
        //     setDisable(true)
        // }else{
        //     setDisable(false)
        // }
    }

    function validation() {
        if (FormData.productPrice !== "undefined") {
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

    return (
        <>

            <div className="addForm">
                <form onSubmit={hanldeForm} autoComplete="off">
                    <select onChange={HandleChange} name="productCat_Id" >
                        <option>Select Category</option>
                        {
                            AllProduct?.map((e, i) =>
                                <option value={e._id} key={i}>{e.catName}</option>
                            )
                        }
                    </select>
                    <select onChange={HandleChange} name="productSubCatId" >
                        <option>Select SubCategory</option>
                        {
                            Subdata?.map((e, i) =>
                                <option value={e._id} key={i}>{e.subCatTitle}
                                </option>
                            )
                        }
                    </select>
                    <input onChange={HandleChange} placeholder="Product Name" name="productName"></input>
                    <input onChange={HandleChange} placeholder="Product Title" name="productTitle"></input>
                    <input onChange={HandleChange} placeholder="Product Price" name="productPrice"></input>
                    <select name='productCurrency' onChange={HandleChange}>
                        <option>Select Currency</option>
                        <option>INR</option>
                        <option>USD</option>
                    </select>
                    <input onChange={HandleChange} placeholder="Product Units" name="productUnit"></input>
                    <input onChange={HandleChange} placeholder="Product Rating" name="productRating"></input>
                    <input onChange={HandleChange} placeholder="Product Stock" name="productStock"></input>
                    <input onChange={HandleChange} placeholder="Product InStock" name="productInstock"></input>
                    <textarea placeholder="Product Description" onChange={HandleChange} name="productDescription"></textarea>
                    <input type="submit" value="Add Product" className="addButton" disabled={disable}></input>
                </form>

            </div>
            <ToastContainer />
        </>
    )
}
