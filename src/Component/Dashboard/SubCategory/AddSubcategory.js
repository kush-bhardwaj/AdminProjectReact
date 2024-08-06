import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { AddSubcategoryApi, CategoryApi } from "../../../API/api";
export default function AddSubcategory(props){
    const [getCat, setCategory] = useState([]);
    const [formData , setFormData] = useState({
        subCatName:"",
        subCatTitle:"",
        catId:""

    })

    // gettng category data to get categories id.
    const categoryApicall = async () => {
        const res = await CategoryApi()
        setCategory(res)
        console.log(res)
    }

    // get subcategory form data
    const hanldeChange =(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }


    // calling subcategory data to add subcategory .
    const formSubmit = async (event)=>{
        event.preventDefault()
        console.log(formData)
        const res = await AddSubcategoryApi(formData)
        if(res.status === 'success'){
            toast(res.message)
        }
        console.log("resdata",res)
        
    }
    useEffect(()=>{
        categoryApicall()
    },[])

    return(
        <>
           <form autoComplete="off" onSubmit={formSubmit}>
             <div className="addsubcat">
             <select className="select" name="catId" onChange={hanldeChange}>
                    {
                        getCat.data?.map((e, pos) =>
                            <option value={e._id} key={pos}>
                                {e.catName}
                            </option>
                    )}
                </select> 
             </div>
           <p><input type="text" placeholder="SubCategory Title" onChange={hanldeChange} name="subCatName"></input></p>
           <p><input type="text" placeholder="SubCategories Name" onChange={hanldeChange} name="subCatTitle"></input></p>
           <p><input type="submit" value ="Add"></input></p>
           </form>
           <ToastContainer />
        </>
        
    )
}