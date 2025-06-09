import React from 'react'
import Button from '../components/Button'

function Login() {
  return (
    <div className='max-w-full h-full flex justify-center items-center bg-slate-200'>
        <div className='w-[70%] flex flex-col gap-6 shadow-xl p-4 items-center bg-white rounded-lg md:w-1/4 md:gap-10'>
            <div >
                <h2 className='text-blue-500 font-bold text-2xl md:text-3xl'>Login</h2>
                
            </div>
            
            <div className='w-full flex flex-col items-center gap-5 md:gap-8'>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-[80%]" placeholder='Username'/>
                <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-[80%]" placeholder='Password'/>
                <Button varient='ternary' classname='text-white font-bold' type='submit'>
                    Login
                </Button>
                <p className='text-sm text-gray-900'>Dont have an account ? <a href="" className='text-blue-600 cursor-pointer'>SignUp</a></p>
            </div>

        </div>
       
      
    </div>
  )
}

export default Login
