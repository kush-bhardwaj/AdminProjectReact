import "./product.css"
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react"
import { AddProductApi, AggregateApi, CategoryApi, GetAllProdectApi, GetAllProdectWithImageApi, ProductImage, SubcategoryAggregate, SubCategoryApi } from "../../../API/api"

export default function AddProduct() {
    const navigate = useState()
    const [send, setSend] = useState()
    const [Subdata, setSubData] = useState()
    const [AllProduct, setAddProduct] = useState()
    const [formData, setFormData] = useState({
        productCat_Id: ""
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
        const senddata = new FormData()
        Object.keys(formData).forEach((v)=>{
            senddata.append(v, formData[v])
        })
        // senddata.append('productImg', formData.productImg)
        // senddata.append('productName', formData.productName)
        // senddata.append('productTitle', formData.productTitle)
        // senddata.append('productPrice', formData.productPrice)
        // senddata.append('productUnit', formData.productUnit)
        // senddata.append('productFeedback', formData.productFeedback)
        // senddata.append('productStock', formData.productStock)
        // senddata.append('productInstock', formData.productInstock)
        // senddata.append('productDescription', formData.productDescription)
        // senddata.append('productRating', formData.productRating)
        // senddata.append('productCurrency', formData.productCurrency)
        // senddata.append('productCat_Id', formData.productCat_Id)
        // senddata.append('productSubcatId', formData.productSubCatId)
        try {
            const res = await AddProductApi(senddata)
            console.log("uplaod imag res", res)
            if (res.status === "success") {
                toast.success(res.message)
            }
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


        // setformData({ ...FormData, [event.target.name]: event.target.value })
        if (formData.productCat_Id !== null || undefined) {
            if (event.target.name === "productCat_Id")
                SubCatApiCall(event.target.value)
        }


        if (event.target.name === "productImg") {
            setFormData({ ...formData, [event.target.name]: event.target.files[0] })
        } else {
            setFormData({ ...formData, [event.target.name]: event.target.value })
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
                    <input type="file" onChange={HandleChange} name="productImg"></input>
                    <input type="submit" value="Add Product" className="addButton" ></input>
                </form>

            </div>
            <ToastContainer />
        </>
    )
}
