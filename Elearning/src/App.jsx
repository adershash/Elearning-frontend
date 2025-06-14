import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Routes,Route } from 'react-router-dom'
import Topbar from './components/Topbar/Topbar'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Mycourse from './Pages/Mycourse'
import Instructors from './Pages/Instructors'
import Navbar from './components/Navbar/Navbar'

function App() {
  
  return (
    < div className='w-full h-screen flex flex-col relative'>
    <Topbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/instructor' element={<Instructors/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/mycourse' element={<Mycourse/>}/>
    </Routes>
       

    </div>
  )
}

export default App
