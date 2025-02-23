import React from 'react'
import { NavLink } from 'react-router-dom'

function MyHeader() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/create">Create</NavLink></li>
          </ul>
        </div>
        <figure className="lg:mr-5 lg:justify-center"><img src="./logo.png" className='h-8 md:h-12 max-h-12  w-auto object-contain' alt="" /></figure>
      </div>
      <div className="navbar-centr hidden lg:flex -translate-x-18">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li><NavLink className={({ isActive }) =>
            `text-lg hover:bg-blue-500 hover:text-white ${isActive ? "bg-black text-white" : ""}`} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => `text-lg hover:bg-blue-500 hover:text-white ${isActive ? "bg-black text-white" : ""}`} to="/create">Create</NavLink></li>
        </ul>
      </div>
      <div className="flex-1 flex justify-end mr-5">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="./me.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyHeader
