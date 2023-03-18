import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const navs = [
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Contact',
      path: '/contact'
    }
  ];
  return (
    <div className='flex justify-between px-10 bg-black text-white py-4 items-center sticky top-0 z-50'>

      <NavLink to='/' replace className='text-2xl'>Sample Logo</NavLink>
      <div className='space-x-5'>

        {navs.map((n, i) => {
          return <NavLink className='hover:bg-white hover:p-2 hover:text-black ' to={n.path} key={i} >{n.label}</NavLink>
        })}
      </div>
    </div>
  )
}

export default Header
