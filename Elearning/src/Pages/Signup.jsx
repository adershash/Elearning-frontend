import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'

function Signup() {
  
     const [signupdata,setSignupData]=useState({
        username:'',
        password:'',
        confirmpassword:'',
        email:'',
        role:''
    })
    const [isload,setisLoad]=useState(false)
    const signupdataChangehandler=(e)=>{
        const {name,value}=e.target
        setSignupData((prevData)=>({
            ...prevData,
            [name]:value
        }))

    }
    
    const handleClick=(e)=>{
        e.preventDefault()
        console.log('hello')
        setisLoad(!isload)
    }
    console.log(signupdata.role)


  return (
    <div className='max-w-full h-full flex justify-center items-center bg-slate-200'>
        <div className='w-[70%] flex flex-col gap-6 shadow-2xl p-4 items-center bg-white rounded-lg md:w-1/4 md:gap-10'>
            <div >
                <h2 className='text-blue-500 font-bold text-2xl md:text-3xl'>SignUp</h2>
                
            </div>
            
            <form className='w-full flex flex-col items-center gap-5 md:gap-8'>
                <select name='role' value={signupdata.role} onChange={signupdataChangehandler} className='border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg  focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-[80%]'>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-[80%]" placeholder='Username' name='username' onChange={signupdataChangehandler} value={signupdata.username} required/>
                <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-[80%]" placeholder='Password' name='password' onChange={signupdataChangehandler} value={signupdata.password} required/>
                <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-[80%]" placeholder='confirm password' name='confirmpassword' onChange={signupdataChangehandler} value={signupdata.confirmpassword} required/>
                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-[80%]" placeholder='email' name='email' onChange={signupdataChangehandler} value={signupdata.email} required/>
                <Button varient='ternary' classname='w-[50%] text-white font-bold cursor-pointer' type='submit' isload={isload} onclick={handleClick}>
                    SignUp
                </Button>
                <p className='text-sm text-gray-900'>Already have an account ? <a href="" className='text-blue-600 cursor-pointer'>Login</a></p>
                
            </form>

        </div>
       
      
    </div>
  )
}

export default Signup
