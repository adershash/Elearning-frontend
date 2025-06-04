import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const onclickhandle=()=>{
    alert("hello")
  }

  return (
    <>
        <Button type="submit"  classes="bg-blue-500 rounded-md p-2 my-4">
          <img src={viteLogo} style={{width:'20px',height:"20px"}} />
            send
            <p>data</p>
            
        </Button>
        <hr />
        <Button type="submit"  classes="bg-red-500 rounded-md p-2 mt-4 my-4">
          
            pay
            <p>ammount</p>
            <img src={viteLogo} className='size-6' />
        </Button>

          <hr />
        <Button type="submit"  classes="bg-green-500 rounded-md p-2 mt-4"  autoFocus onclick={onclickhandle}>
          
            transfer
            <p>ammount</p>
        </Button>
    </>
  )
}

export default App
