import { useEffect, useState } from "react"
import { updateProductApi } from "../../../API/api"
export default function UpdateProduct({Update}){
    // console.log("update",Update)
    // const productDetails ={Update}.Update.data
    const [data , setData] = useState()
    const [updateData , setupdateData] = useState(Update)
    // console.log("updatedata",updateData)
    const hanldeForm= async(event)=>{
        event.preventDefault() 
        try{
         // console.log("submit state",updateData)
        const res = await updateProductApi(updateData)
        console.log("res",res)
        if(res.status === "success"){
            alert(res.status)
        }
        }catch(err){console.log(err)}
       
    }
    const HandleChange =(event)=>{
        setupdateData({...updateData,[event.target.name]:event.target.value})
        // console.log(updateData)
    }
    return(
        <>
            <form onSubmit={hanldeForm} autoCapitalize="off">
                <input onChange={HandleChange} defaultValue={updateData?.productName} placeholder="Product Name"name="productName"></input>
                <input onChange={HandleChange} defaultValue={updateData?.productPrice} placeholder="Product Price" name="productPrice"></input>
                <input onChange={HandleChange} defaultValue={updateData?.productCurrency} placeholder="Product Cuurency" name='productCurrency'></input>
                <input onChange={HandleChange} defaultValue={updateData?.productUnit} placeholder="Product Units" name="productUnit"></input>
                <input onChange={HandleChange} defaultValue={updateData?.productRating} placeholder="Product Rating" name="productRating"></input>
                <input onChange={HandleChange} defaultValue={updateData?.productFeedback} placeholder="Product Feedback" name="productFeedback"></input>
                <input onChange={HandleChange} defaultValue={updateData?.productStock} placeholder="Product Stock" name="productStock"></input>
                <input onChange={HandleChange} defaultValue={updateData?.productInstock} placeholder="Product InStock" name="productInstock"></input>
                <input onChange={HandleChange} defaultValue={updateData?.productCat_Id} placeholder="Product CatId" name="productCat_Id"></input>
                <input onChange={HandleChange} defaultValue={updateData?.productSubCatId} placeholder="Product SubCatId" name="productSubCatId"></input>
                <input onChange={HandleChange} defaultValue={updateData?.productDescription} placeholder="Product Description" name="productDescription"></input>
                <input onChange={HandleChange} defaultValue={updateData?.productTitle} placeholder="Product Title" name="productTitle"></input>
                <input type="submit" value="Add Product"></input>
            </form>
       
        </>
    )
}