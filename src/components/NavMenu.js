import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo.js'

const NavMenu = ({ onLogout }) => {
  const [collapsed] = useState(true)

  return (
    <header>
      <nav
        className='shadow-xl mb-3 bg-[#004e98] fixed top-0 w-full z-90'
      >
        <div className='container mx-auto px-4 '>
          <div className='flex items-center justify-between py-3'>
            <Logo />
            <h1 className='text-lg text-[#edf6f9] font-bold'>
              Research Management System
            </h1>
            <div
              className={`lg:flex lg:items-center ${collapsed ? 'hidden' : ''}`}
            >
              <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                <li className='nav-item'>
                  <Link
                    to='/home'
                    className='nav-link text-xl font-bold text-[#edf6f9] hover:text-gray-600 px-3 py-2 border-r-2 border-gray-400'
                  >
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/applications'
                    className='nav-link text-xl font-bold text-[#edf6f9] hover:text-gray-600 px-3 py-2 border-r-2 border-gray-400'
                  >
                    Publication Award Application
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/counter'
                    className='nav-link text-xl font-bold text-[#edf6f9] hover:text-gray-600 px-3 py-2 border-r-2 border-gray-400'
                  >
                    Help
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/counter'
                    className='nav-link text-xl font-bold text-[#edf6f9] hover:text-gray-600 px-3 py-2 border-r-2 border-gray-400'
                  >
                    Support List
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link text-xl font-bold text-[#edf6f9] hover:text-gray-600 px-3 py-2 border-r-2 border-gray-400'
                    onClick={onLogout}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavMenu
