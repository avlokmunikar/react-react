import React from 'react'
import { FaCss3, FaJava, FaPhp, FaPython, FaReact, FaSwift, FaVenus } from 'react-icons/fa';
const Tech = () => {
  return (
    <div>
      <h1 className='font-extrabold text-3xl text-center'>Technologies I Use</h1>
      <div className='p-10 grid grid-cols-4 gap-16 justify-items-center'>
        <FaReact size={150} className='hover:scale-125 hover:text-rose-500 duration-200' />
        <FaPython size={150} />
        <FaJava size={150} className='animate-pulse' />
        <FaVenus size={150} />
        <FaCss3 size={150} className='animate-bounce' />
        <FaSwift size={150} />
        <FaPhp size={150} />

      </div>
    </div>


  )
}

export default Tech
