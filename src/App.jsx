import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("sub")
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
         
      <form onSubmit = {(e)=>{
        submitHandler(e);
      }} className='lg:w-1/2 p-10 flex gap-4  flex-col items-start '>

          <h1 className='text-3xl font-bold'>Add Notes </h1>
       
          <input 
            typte='text' 
            className='font-medium px-5 w-full py-2 border-2 rounded outline-none'
            placeholder='Enter Notes Heading'
          />

          <textarea 
            type='text'
            className='font-medium px-5 w-full h-32 py-2 border-2 rounded outline-none'
            placeholder='Write Details'
          />
          <button className=' font-medium w-full bg-white text-black px-5 py-2 rounded'>
            Add Notes
          </button>
        
        </form>


        <div className='lg:w-1/2 lg:border-l-2  p-10'>
          <h1 className='text-3xl font-bold'>Recent Notes </h1>
          <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
            <div className='h-52 w-40 rounded-2xl bg-white'> </div>
            <div className='h-52 w-40 rounded-2xl bg-white'> </div>
            <div className='h-52 w-40 rounded-2xl bg-white'> </div>
            <div className='h-52 w-40 rounded-2xl bg-white'> </div>
            <div className='h-52 w-40 rounded-2xl bg-white'> </div>
            <div className='h-52 w-40 rounded-2xl bg-white'> </div>
          
          </div>
        </div>
    </div>
  )
}

export default App
