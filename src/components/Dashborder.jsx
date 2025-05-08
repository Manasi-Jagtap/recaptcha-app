import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const Dashborder = () => {
  return (
      <>
          <div className=' bg-slate-200 h-screen'>
              <div className='flex justify-between items-center bg-slate-900  p-4 text-xl text-white'>
                  <h5 className='text-2xl font-bold'>Dashboard</h5>
                  <ul className='flex gap-7 justify-between items-center ml-70 font-bold'>
                      <li className='cursor-pointer'>Home</li>
                      <li className='cursor-pointer'>Contact</li>
                  </ul>
                 
                  <input type="search" placeholder='search here..' className='border rounded bg-white text-gray-800 px-3 text-lg outline-0 w-80' />
              </div>
              
              <div className='flex flex-col  pt-5 gap-8 px-4 bg-slate-900 w-1/8 h-screen text-white absolute  left-0 text-center'>
                  <FaRegUserCircle className=' text-6xl text-sky-400  ml-10  cursor-pointer hover:text-sky-700 ' />
                  <h1 className='text-xl font-semibold'>email Id</h1>
                  <ul className='flex flex-col gap-5 text-lg font-bold'>
                      <li className='cursor-pointer hover:text-red-500'>Home</li>
                      <li className='cursor-pointer hover:text-red-500'>File</li>
                      <li   className='cursor-pointer hover:text-red-500'>Table</li>
                      <li className='cursor-pointer hover:text-red-500'>LogOut</li>

                  </ul>
              </div>
              <div className='ml-1/8 pt-5 pl-80 text-center '>
                  <h1>Welcome, to Dashboard</h1>
              </div>
              
      </div>
      </>
  )
}

export default Dashborder