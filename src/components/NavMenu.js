import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [collapsed] = useState(true);

  // const toggleNavbar = () => {
  //   setCollapsed(!collapsed);
  // };
  // bg-[#83c5be]
  return (
    <header>
      <nav className="shadow-xl mb-3 bg-[#004e98] fixed top-0 w-full" >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <h1 className="text-lg text-[#edf6f9] font-bold">Research Management System</h1>
            <div className={`lg:flex lg:items-center ${collapsed ? 'hidden' : ''}`}>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link to="/home" className="nav-link text-xl font-bold text-[#edf6f9] hover:text-gray-600 px-3 py-2 border-r-2 border-gray-400">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/counter" className="nav-link text-xl font-bold text-[#edf6f9] hover:text-gray-600 px-3 py-2 border-r-2 border-gray-400">Counter</Link>
                </li>
                <li className="nav-item">
                  <Link to="/fetch-data" className="nav-link text-xl font-bold text-[#edf6f9] hover:text-gray-600 px-3 py-2 border-r-2 border-gray-400">Fetch data</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-xl font-bold text-[#edf6f9] hover:text-gray-600 px-3 py-2 border-r-2 border-gray-400">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;

