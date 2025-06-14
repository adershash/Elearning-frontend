import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBookOpen, FaCalendar, FaMedal, FaUser } from 'react-icons/fa';
import { HiSquares2X2, HiUsers } from "react-icons/hi2";
import Button from '../Button/Button';


function Navbar() {
  return (
    <div className='md:w-full md:h-screen md:shadow-md' >
        <div className='w-full h-10 flex items-center gap-3 px-4 bg-white rounded-lg text-slate-500  shadow-md md:rounded-none text-2xl font-extrabold'>
                   Dashboard
                </div>
        <div className='w-full  grid gap-5 bg-white py-5 px-8 mt-4 shadow-sm rounded-xl'>

             <NavLink to='/' className={({isActive})=>{
                return isActive?'active':null
            }}>
                <div className='w-full h-10 flex items-center gap-3 px-4 bg-white rounded-lg text-slate-500 font-bold shadow-xl [.active_&]:bg-blue-500 [.active_&]:text-white'>
                  <FaBookOpen className='size-5'/>  Home
                </div>
            </NavLink>
             
            <NavLink to='/mycourse' className={({isActive})=>{
                return isActive?'active':null
            }}>
                <div className='w-full h-10 flex items-center gap-3 px-4 bg-white rounded-lg text-slate-500 font-bold shadow-xl [.active_&]:bg-blue-500 [.active_&]:text-white'>
                  <FaBookOpen className='size-5'/>  My Course
                </div>
            </NavLink>
            <NavLink to='/instructor' className={({isActive})=>{
                return isActive?'active':null
            }}>
                <div className='w-full h-10 flex items-center gap-3 px-4 bg-white rounded-lg text-slate-500 font-bold shadow-xl [.active_&]:bg-blue-500 [.active_&]:text-white'>
                   <HiUsers className='size-5'/> Instructors
                </div>
            </NavLink>
            <NavLink to='/profile' className={({isActive})=>{
                return isActive?'active':null
            }}>
                <div className='w-full h-10 flex items-center  gap-3 px-4 bg-white rounded-lg text-slate-500 font-bold shadow-xl [.active_&]:bg-blue-500 [.active_&]:text-white'>
                   <FaUser className='size-5'/> Profile
                </div>
            </NavLink>
        </div>
        <div className='flex justify-center mt-10 bg-white '>
            <div className='w-[70%] flex flex-col gap-1 px-3 py-3 rounded-xl shadow-lg'>
                <div className='flex gap-1'>
                    <h1 className='font-bold'>Upgrade your Account to Pro</h1>
                    <FaMedal className='size-10 text-yellow-600'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-xs text-slate-500'>Upgrade to premium to get premium features</p>
                    <Button varient='ternary' classname='w-20 py-1 text-white' >Upgrade</Button>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Navbar
