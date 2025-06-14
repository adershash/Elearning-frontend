import api from "./config";
import { useState,createContext,useContext } from "react";


export const authContext=createContext()

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const signup=(signupdata)=>{
        console.log(signupdata)
        api.post('api/register/',signupdata,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>console.log('account created'))
    }

    const login=(logindata)=>{
        api.post('api/token/',logindata,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            localStorage.setItem('access_token',res.data.access)
            localStorage.setItem('refresh_token',res.data.refresh)  
        })
         
    }

    const getUser=async()=>{
        const result=await api.get('api/role-info/')
        setUser(result.data)
    }

    return(
        <authContext.Provider value={{user,signup,login,getUser}}>
            {children}
        </authContext.Provider>
    )

    
}
export const useAuth=()=>{
        return(useContext(authContext))
}
