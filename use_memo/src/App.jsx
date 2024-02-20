import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(10).fill(2).map((item)=>{
  return item
})

function App() {
  const [number, setNumber] = useState()


   
  return (
    <>
    <div className='btn'>{nums}</div>
    <button className='btn' onClick={()=> setNumber(nums)}>click to show {number}</button>
    </>
  )
}

export default App
