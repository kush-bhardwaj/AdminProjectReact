import { useEffect, useState } from "react"
import { GetAllProdectApi, GetAllProdectWithImageApi, ProductImage } from "../../../API/api"
import { toast, ToastContainer } from "react-toastify"
import Products from "./Products"

export default function UplpadProductImage ({id}){
    const [True,setTrue] = useState(false)
    const [send , setSend] = useState({productId:id})
    const [product , setProduct] = useState()
    function handleChange(event){
        console.log(send)
        if(event.target.name === "image"){
            setSend({...send,[event.target.name]:event.target.files[0]})
        }else{
            setSend({...send,[event.target.name]:event.target.value})
            
        }
    }
    async function handleSubmit(event){
        event.preventDefault();
       const formdata = new FormData()
        formdata.append('image',send.image);
        formdata.append('productId',send.productId)
        const res = await ProductImage(formdata);
        if(res.status ==="success"){
            toast.success(res.message)
        }
    }
  
    return (<>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" onChange={handleChange} ></input>
            <input type="submit" value="submit"></input>
        </form>

        <ToastContainer /> 
      
    </>)
}