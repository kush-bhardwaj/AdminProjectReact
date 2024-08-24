import { useEffect, useState } from "react"
import { DeleteProductApi, DelteSliderApi, GetSlider, UploadImageApi } from "../../../API/api";
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
           setTimeout(()=>{
            SliderApi()
           },1000)
        }
       }catch(err){console.log(err)}
       
    }
   async function SliderApi(){
       try{
        const res = await GetSlider()
        setSlider(res.data)
       }catch(err){console.log(err)}
    }
    const DeleteSlider = async(id)=>{
        console.log(id)
       const res = await DelteSliderApi(id);
       if(res.status ==="success"){
        toast.success(res.message)
        SliderApi()
       }
    }
    useEffect(()=>{
        SliderApi()
    },[])
    return (
     <>
         <h1>Slider</h1>
        {slider?.map((e,i)=><div className="sliderDiv">
            <p><img width={400} src={`http://localhost:5000/image/${e.image}`}></img> <button onClick={()=>DeleteSlider(e._id)}>Delete</button></p>
           
        </div>)}
        <form autoComplete="off" onSubmit={FormHandle}>
        <input type="file" name="image" onChange={handleImage}></input>
        <input type="submit" value ="Upload"></input>
        </form>

        <ToastContainer />
     </>
    )
 }