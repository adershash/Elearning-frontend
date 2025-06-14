import React from 'react'
import {FaBell} from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {Menu,X} from 'lucide-react'
import {IoSettingsSharp,IoArrowDownSharp} from 'react-icons/io5'
import { useState } from 'react'
import Button from '../Button/Button'
import Navbar from '../Navbar/Navbar'


function Topbar() {
    const [isopen,setisOpen]=useState(false)
    const [isclick,setClick]=useState(false)
  return (<div className='relative'>
    <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${isopen? 'translate-x-0':'-translate-x-full'} md:hidden`}>
        <div className='w-full flex justify-end p-4'>
            <button onClick={()=>setisOpen(false)}>
            <X size={28} className='text-slate-500'/>
        </button>

        </div>
        <Navbar/>
        

    </div>

    <div className='w-full px-4 py-4 flex items-center justify-between bg-white shadow-md md:w-[80%] md:px-8'>
        
        <div className='flex items-center gap-2'>
            <button onClick={()=>{setisOpen(true)}}>
            <Menu size={28} className=' text-slate-500 md:hidden'/>
            </button>
            <h2 className='text-blue-500 font-extrabold font-sans text-sm md:text-2xl'>Next Learn</h2>
        </div>
        <h1 className='font-bold text-slate-500 md:text-xl'>Profile</h1>
        <div className='flex gap-3 items-center md:gap-6'>
            <FaBell className='size-4 text-slate-500 md:size-5'/>
            <IoSettingsSharp className='size-4 text-slate-500 md:size-5'/>
            <div className='flex items-center gap-1'>
            <img src="https://picsum.photos/200/300" alt="" className='size-5 rounded-full object-cover ' />
            <h1 className='text-xs text-slate-500 md:text-sm'>Adersh</h1>
            <button onClick={()=>setClick(!isclick)} className='mt-1'>
            <MdKeyboardArrowDown className='size-4 text-slate-500 md:size-5'/>
            </button>
            </div>
             <div className={`fixed top-0 right-0 mt-16 md:mt-20 w-48 flex flex-col items-center bg-white shadow-md z-50 rounded-lg  mr-2 transition-all ease-in-out duration-300 p-3 ${isclick?'max-h-40 opacity-100':'max-h-0 opacity-0'} md:mr-52 xl:mr-72`}> 
        <Button varient='ternary' classname='w-20 py-1 text-white font-bold'>Logout</Button>
    </div>
            
        </div>
        
      
    </div>
   
  </div>)
}

export default Topbar
