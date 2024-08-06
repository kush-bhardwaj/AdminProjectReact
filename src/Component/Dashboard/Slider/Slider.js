import { useEffect, useState } from "react"
import { GetSlider, UploadImageApi } from "../../../API/api";
import { toast, ToastContainer } from "react-toastify";
export default function Slider(){
    const [ slider , setSlider] = useState();
    const [ send , setSend] = useState()
    function handleImage(event){
        if(event.target.name === "image"){
            setSend({...send,[event.target.name]:event.target.files[0]})
        }else{
            setSend({...send,[event.target.name]:event.target.value})
        }
    }
    async function FormHandle(event){
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("image",send.image)
       try{
        const res = await UploadImageApi(formdata);
        if(res.status === 'success'){
            toast(res.message)
        }
       }catch(err){console.log(err)}
       
    }
   async function SliderApi(){
       try{
        const res = await GetSlider()
        console.log("data", res.data)
        setSlider(res.data)
       }catch(err){console.log(err)}
    }
    useEffect(()=>{
        SliderApi()
    },[])
    return (
     <>
         <h1>Slider</h1>
        {slider?.map((e,i)=><img width={400} src={`http://localhost:5000/image/${e.image}`}></img>)}
        <form autoComplete="off" onSubmit={FormHandle}>
        <input type="file" name="image" onChange={handleImage}></input>
        <input type="submit" value ="Upload"></input>
        </form>

        <ToastContainer />
     </>
    )
 }