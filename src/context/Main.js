import { useEffect, useState } from "react";
import { UserInfo } from "./UserInfo";

export default function Main({children}){
    const [loginData,setLoginData] = useState({name:"Rahul"});
    function login(data){
        setLoginData(data);
        
    }
    function logout(){

    }

    function cart(){

    }
    const initData = {
        loginData:loginData,
        setLoginData:setLoginData,
        login:login,
        logout:logout
    }

    useEffect(()=>{

    },[])
    return(

        <UserInfo.Provider value={initData}>
            {children}
        </UserInfo.Provider>
    )
}