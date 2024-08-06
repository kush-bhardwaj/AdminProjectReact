import { useEffect, useState } from "react"
import { AddNotification, GetAllNotification } from "../../../API/api";

export default function Notification(){
    const [Notification , setNotification] = useState({
        message:""
    });
    const [allNotification , setAllNotification] = useState()
    const handleChange =(event)=>{
        setNotification({...Notification,[event.target.name]:event.target.value})
    }
    const NotificationSubmit =async(event)=>{
        event.preventDefault();
       const res = await AddNotification(Notification);
       if(res.status==="success"){
        GetAllNotification()
       }
       console.log(res)
    }
    async function GetNotification(){
        const res =await GetAllNotification()
        setAllNotification(res.notification)
    }
    useEffect(()=>{
        GetNotification()
    },[allNotification])
    return (
        <>
            <div className="addsubcat">
        <h3>Notifications</h3>
        <form onSubmit={NotificationSubmit} autoComplete="off">
            <input type="input" placeholder="Enter Notification" autoComplete="off" onChange={handleChange} name="message" ></input>
            <input type="submit" value="Add Notification"></input>
        </form>
      </div>
        
        <div>
            <ul>
            {allNotification?.map((e,i)=><li key={i}>{e.message}</li>)}
            </ul>
        </div>
        </>
      
    )
}