import React from 'react'
import Navbar from './Navbar'
import robo from '../assets/robo.png' 
const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden">
     
      {[...Array(140)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            opacity: 0.5 + Math.random() * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 font-Montserrat">
        <Navbar />
        <div className='text-white mt-20 '>
          <div className='text-9xl items-center  justify-center flex '>HIII THERE</div>
          <div className='text-9xl items-center  justify-center flex'>I'M VISHWANATH</div>

          <div className='text-9xl items-center ml-[550px] flex' >
            <img className='h-56 w-56' src={robo} alt="Robot" />
            <div className='text-9xl items-center ml-[70px] flex
                bg-gradient-to-r from-red-400 to-purple-600
                text-transparent bg-clip-text
                border-2 border-dashed border-orange-400 p-1 font-bold '>
              SOFTWARE
            </div>
          </div>
          <div className='text-9xl items-center  justify-center flex ml-[40px]'>ENGINEER</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
