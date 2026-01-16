import { useState } from 'react'
import './App.css'
import {X} from 'lucide-react'


function App() {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault();
    
    const copyTask = [...task];
    copyTask.push({title,details});
    setTask(copyTask);
    

    setDetails('');
    setTitle('');
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
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
            value={title}
            required
            onChange = {(e)=>{
              setTitle(e.target.value);
            }}
          />

          <textarea 
            type='text'
            className='font-medium px-5 w-full h-32 py-2 border-2 rounded outline-none'
            placeholder='Write Details'
            value={details}
            required
            onChange= {(e)=>{
              setDetails(e.target.value);
            }}
          />
          <button
           className='cursor-pointer active:bg-green-500 active:scale-95 font-medium w-full bg-green-400 text-black px-5 py-2 rounded'>
            Add Notes
          </button>
        
        </form>


        <div className='lg:w-1/2 lg:border-l-2  p-10'>
          <h1 className='text-3xl font-bold'>Recent Notes </h1>
          <div className='flex flex-wrap items-start justify-start  gap-5 mt-5 h-[90%] overflow-auto'>
           {task.map((elem,idx)=>{
            return <div key={idx} className="pb-3 flex justify-between items-start flex-col relative h-52 w-40 bg-cover text-black py-6 px-5 rounded-xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]"> 
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
              </div>
              <button onClick = {()=>
                deleteNote(idx)
              } className='cursor-pointer active:scale-95 active:bg-red-600 py-1 rounded font-bold w-full bg-red-500 text-white'>Delete Note</button>
            </div>
           })}
          </div>
        </div>
    </div>
  )
}

export default App
