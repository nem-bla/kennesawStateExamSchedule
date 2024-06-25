import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header bg-dark sticky top-0 bg-white shadow-md flex items-center justify-start px-8 py-2 md:py-0 min-h-[125px] z-50">
        {/* <!-- logo --> */}
        <h1 className="w-3/12 text-blue-400 text-2xl">
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
          <img src={'../../public/logo.svg.png'} alt="fitnessLogo" className='h-20 w-auto' />
          <span className='hidden md:block ml-2 text-ksu-black'>Exam Schedule</span>
            
          </NavLink>
        </h1>
      </header>
  )
}

export default Navbar