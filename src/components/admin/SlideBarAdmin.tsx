import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {}

const SlideBarAdmin = (props: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
   <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-white text-xl font-bold">ADMIN</a>
            <div className="hidden md:flex space-x-4">
                <Link to={''} className="text-gray-300 hover:text-white">Home</Link>


                <li className="text-gray-300 hover:text-white"><button onClick={toggleDropdown} className="text-white focus:outline-none">
            Option
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 bg-white shadow-lg rounded-md w-48">
              <li>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  to="list"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Product List
                </Link>
              </li>
              <li>
                <Link
                  to="category_list"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Category List
                </Link>
              </li>
            </ul>
          )}</li>
                          <Link to={'/'} className="text-gray-300 hover:text-white">Website</Link>
            </div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden">
            <a href="#" className="block text-gray-300 hover:text-white p-2">Home</a>
            <a href="#" className="block text-gray-300 hover:text-white p-2">About</a>
            <a href="#" className="block text-gray-300 hover:text-white p-2">Services</a>
            <a href="#" className="block text-gray-300 hover:text-white p-2">Contact</a>
        </div>
    </nav>
    </>
  )
}

export default SlideBarAdmin