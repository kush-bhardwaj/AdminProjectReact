import 'react-toastify/dist/ReactToastify.css';
import {  useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import {  UpdateSubCatApi } from "../../../API/api";
export default function UpdateSubcategory({Update}){

    console.log("update props data" , Update)
    const [formData , setFormData] = useState(Update)
    const hanldeChange =(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }


    // calling Deletesubcategory  API.
    const formSubmit = async (event)=>{
        event.preventDefault()
       
        const res = await UpdateSubCatApi(Update._id,formData)
        console.log('res datr',formData)
        if(res.status === 'success'){
            toast(res.message)
        }else{toast(res.message)}
        
        
    }
    return(
        <>
           <form autoComplete="off" onSubmit={formSubmit}>
           <p><input type="text" placeholder="SubCategory Title" onChange={hanldeChange} name="subCatName" defaultValue={Update.subCatName}></input></p>
           <p><input type="text" placeholder="SubCategories Name" onChange={hanldeChange} name="subCatTitle" defaultValue={Update.subCatTitle}></input></p>
           <p><input type="submit" value ="Update"></input></p>
           </form>
           <ToastContainer />
        </>
        
    )
}