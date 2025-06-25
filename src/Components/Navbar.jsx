import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav id='home' className='font-bold w-full px-5 py-4 bg-transparent'>
      {/* Mobile menu button */}
      <div className="flex items-center justify-between md:hidden">
        <div className="text-xl font-Poppins text-white">Vishwanath</div>
        <button
          className="text-gray-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:grid grid-cols-3 items-center">
        <div className='ml-32 justify-start flex gap-10 text-gray-400 text-sm'>
          <a href="#home" className="text-gray-400">Home</a>
          <a href="#projects" className="text-gray-400">Projects</a>
          <a href="#about" className="text-gray-400">About Me</a>
        </div>
        <div className="relative group flex justify-center items-center pt-6">
          <a
            href="https://www.dropbox.com/scl/fi/gksb2er2tcpm3fp68np1l/My-Resume-2.pdf?rlkey=lqzghjlk0w6fivy261ydozn4c&dl=0"
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
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 rounded-lg shadow-lg p-4">
          <div className="flex flex-col gap-4 text-gray-400 text-base">
            <a href="#home" className="text-gray-400" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#projects" className="text-gray-400" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#about" className="text-gray-400" onClick={() => setMenuOpen(false)}>About Me</a>
            <a
              href="https://www.dropbox.com/scl/fi/gksb2er2tcpm3fp68np1l/My-Resume-2.pdf?rlkey=lqzghjlk0w6fivy261ydozn4c&dl=0"
              className="text-pink-400 font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Get My Resume 
            </a>
            <div className="flex flex-col gap-1 mt-2">
              <span className="text-sm text-gray-400">Say hi -</span>
              <span className="text-sm bg-gradient-to-r from-red-400 to-purple-600 text-transparent bg-clip-text">
                vs7315625@gmail.com
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
