import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(false)
  const onclickhandle=()=>{
    setCount(true)
    setTimeout(()=>{
      setCount(false)
    },5000)
  }

  return (
    <>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
       

    </>
  )
}

export default App
