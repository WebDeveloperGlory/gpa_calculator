import { useState } from 'react'
import { Bars3Icon, CalculatorIcon, PlusIcon } from '@heroicons/react/24/solid'
import './App.css'
import { text } from './constants'
import { SemesterBox } from './components'

function App() {
  const [count, setCount] = useState(0);
  const [semester, setSemester] = useState([]);

  const { title, content } = text.headerText;
  const addSemester = () => {
    setSemester([ ...semester, {} ])
  }

  return (
    <div className='bg-cyan-300 min-h-screen text-black p-6 font-medium'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <CalculatorIcon className='w-6 h-6 text-blue-600' />
          <h1 className='text-xl font-bold'>{ title }</h1>
        </div>
        <Bars3Icon className='w-6 h-6 cursor-pointer' />
      </div>
      <div className='mt-4'>
        <p className='text-base capitalize'>{ content }</p>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        {
          semester.map((item, i) => <SemesterBox key={i} setSemester={ setSemester } index={ i } semester={ semester } />)
        }
      </div>
      <div className={`bg-white w-full flex justify-center items-center p-6 gap-2 rounded-lg ${ semester.length > 0 && 'mt-4' }`}>
        <PlusIcon
          onClick={ addSemester }
          className='w-6 h-6 cursor-pointer'
        />
        <h1 
          onClick={ addSemester }
          className='cursor-pointer'
        >Add Semester</h1>
      </div>
    </div>
  )
}

export default App
