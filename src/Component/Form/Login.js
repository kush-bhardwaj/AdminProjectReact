import { useState } from 'react'
import { LOGO_URL } from '../../URL/URL'
import './form.css'
import { LoginApi } from '../../API/api'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { setStorage } from '../../UTILS/Storage'

export function AdminLogin(){
    const navigate = useNavigate()
    const [loginData,setData] =useState({
        email:"",
        password:""
    })
    const handlleSubmit=async(event)=>{
        event.preventDefault()
        
        const res = await LoginApi(loginData)
        // console.log("loging res",res)
        if(res.status === "success"){
            setStorage(res)
            setStorage(res)
           toast(res.message)
                setTimeout(()=>{
                    navigate('../dashboard')
                },2000)
           }
           
           
        }
        const handlleChange= (event)=>{
            setData({...loginData,[event.target.name]:event.target.value})
        }

        return(
            <>
                <div className="signupMain">
                    <div className="signupMiddle">
                        <div className="signupForm">
                            {/* <img src="file:///C:/Users/PUSH/OneDrive/Desktop/AdmitProject/myadmid/public/images/file.png" alt='logo'></img> */}
                            <p>Log Into Your Account</p>
                           <form autoComplete='off' onSubmit={handlleSubmit}>
                            <input type='text' name="email" onChange={handlleChange} placeholder='Email'></input>
                            <input type='password'  name="password" onChange={handlleChange} placeholder='Pasword'></input>
                            <input type='submit' value="Submit" className='button'></input>
                           
                           </form>
                           
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </>
        )
    
    }
   