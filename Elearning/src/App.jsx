import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

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
    <Signup/>
       

    </>
  )
}

export default App
