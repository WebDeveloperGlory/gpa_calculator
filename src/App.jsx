import { useState } from 'react'
import { Bars3Icon, CalculatorIcon } from '@heroicons/react/24/solid'
import './App.css'
import { text } from './constants'

function App() {
  const [count, setCount] = useState(0)

  const { title, content } = text.headerText;

  return (
    <div className='bg-cyan-300 min-h-screen text-black p-6 font-medium'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <CalculatorIcon className='w-6 h-6 text-blue-600' />
          <h1 className='text-xl font-bold'>{ title }</h1>
        </div>
        <Bars3Icon className='w-6 h-6' />
      </div>
      <div className='mt-4'>
        <p className='text-base capitalize'>{ content }</p>
      </div>
    </div>
  )
}

export default App
