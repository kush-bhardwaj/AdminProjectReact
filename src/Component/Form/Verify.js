import { useState } from 'react'
import { LOGO_URL } from '../../URL/URL'
import './form.css'
import { LoginApi } from '../../API/api'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { setStorage } from '../../UTILS/Storage'

export function VerifyForm(){
        return(
            <>
                <div className="signupMain">
                    <div className="signupMiddle">
                        <div className="signupForm">
                            {/* <img src="file:///C:/Users/PUSH/OneDrive/Desktop/AdmitProject/myadmid/public/images/file.png" alt='logo'></img> */}
                            <p>Fill Your Account Details</p>
                           <form autoComplete='off'>
                            <input type='text' name="email" placeholder='Email'></input>
                            <input type='password'  name="password" placeholder='Pasword'></input>
                            <input type='submit' value="Submit" className='button'></input>
                           </form>
                           
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </>
        )
    
    }
   