import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between px-8 bg-orange-900 text-white py-2 items-center'>

      <NavLink to='/' replace className='text-xl'>Logo</NavLink>
      <div className='space-x-5'>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
    </div>
  )
}

export default Header
