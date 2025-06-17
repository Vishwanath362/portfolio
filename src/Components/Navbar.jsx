import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='home' className='font-bold  grid grid-cols-3  p-5  w-full ml-5 mr-5'>
      <div className='ml-32 justify-start flex gap-10 text-gray-400 text-sm '>
        <a href="#home" className="text-gray-400">Home</a>
        <a href="#projects" className="text-gray-400">Projects</a>
        <a href="#about" className="text-gray-400">About Me</a>
        {/* <a href="#contact" className="text-gray-400">Contact Me</a> */}

      </div>
      <div className="relative group flex justify-center items-center pt-6">
        <a
          href="https://www.google.com"
          className="text-2xl font-Poppins text-white px-2 relative"
        >
          <span className="block group-hover:hidden">Vishwanath</span>
          <span className="hidden group-hover:block text-pink-400">Get My Resume</span>
        </a>
      </div>



      <div className="ml-10 flex justify-center gap-2">
        <h3 className="text-sm font-poppins text-gray-400">
          Say hi -
        </h3>
        <h3 className="text-sm font-poppins bg-gradient-to-r from-red-400 to-purple-600 text-transparent bg-clip-text">
          vs7315625@gmail.com
        </h3>
      </div>

    </nav>
  )
}

export default Navbar
