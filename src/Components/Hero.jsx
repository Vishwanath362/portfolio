import React from 'react'
import Navbar from './Navbar'
import robo from '../assets/robo.png'

const Hero = () => {
  // Generate star positions only once for consistent rendering
  const stars = React.useMemo(
    () =>
      [...Array(140)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        opacity: 0.5 + Math.random() * 0.5,
      })),
    []
  )

  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
          style={star}
        />
      ))}

      <div className="relative z-10 font-Montserrat">
        <Navbar />
        <div className="text-white mt-20 px-2">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-center">
              HIII THERE
            </h1>
          </div>
          <div className="flex justify-center items-center mt-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-center">
              I'M VISHWANATH
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-2">
            <img
              className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-56 lg:w-56"
              src={robo}
              alt="Robot"
            />
            <div
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold
                bg-gradient-to-r from-red-400 to-purple-600
                text-transparent bg-clip-text
                border-2 border-dashed border-orange-400 p-1 ml-0 md:ml-8 mt-4 md:mt-0 text-center"
            >
              SOFTWARE
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-center">
              ENGINEER
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
