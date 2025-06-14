import React from 'react'
import Button from '../components/Button/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../API/config'
import { useAuth } from '../API/AuthProvider'

function Login() {
    const [logindata,setLoginData]=useState({
        username:'',
        password:'',
        
    })
    const {user,login,signup,getUser}=useAuth()
    const [isload,setisLoad]=useState(false)
    const logindataChangehandler=(e)=>{
        const {name,value}=e.target
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value
        }))

    }
    
    const handleClick=async(e)=>{
        setisLoad(true)
        e.preventDefault()
        await login(logindata)
        await getUser()
        console.log(user)
        setisLoad(false)
      
        
        
    }


  return (
    <div className='max-w-full h-full flex justify-center items-center bg-slate-200'>
        <div className='w-[70%] flex flex-col gap-6 shadow-2xl p-4 items-center bg-white rounded-lg md:w-1/4 md:gap-10'>
            <div >
                <h2 className='text-blue-500 font-bold text-2xl md:text-3xl'>Login</h2>
                
                
            </div>
            
            <form className='w-full flex flex-col items-center gap-5 md:gap-8'>
                
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-[80%]" placeholder='Username' name='username' onChange={logindataChangehandler} value={logindata.username}/>
                <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-[80%]" placeholder='Password' name='password' onChange={logindataChangehandler} value={logindata.password}/>
                <Button varient='ternary' classname='w-[50%] text-white font-bold cursor-pointer' type='submit' isload={isload} onclick={handleClick}>
                    Login
                </Button>
                <p className='text-sm text-gray-900'>Dont have an account ? <Link to='/signup' className='text-blue-600 cursor-pointer'>SignUp</Link></p>
            </form>

        </div>
       
      
    </div>
  )
}

export default Login
