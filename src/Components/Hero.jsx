import React, { useRef, useEffect } from 'react'
import Navbar from './Navbar'
import robo from '../assets/robo.png'
import gsap from 'gsap'

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

  // --- GSAP animation refs
  const hiRef = useRef()
  const nameRef = useRef()
  const softwareRef = useRef()
  const engineerRef = useRef()
  const roboRef = useRef()

  useEffect(() => {
    // Animate the header texts and image
    gsap.fromTo(
      hiRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    )
    gsap.fromTo(
      nameRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power4.out' }
    )
    gsap.fromTo(
      roboRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.4, ease: 'back.out(1.7)' }
    )
    gsap.fromTo(
      softwareRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power4.out' }
    )
    gsap.fromTo(
      engineerRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: 'power4.out' }
    )

    // Optional: Floating effect on the robot image
    gsap.to(roboRef.current, {
      y: '-=20',
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'sine.inOut',
      delay: 1
    })
  }, [])

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
            <h1
              ref={hiRef}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-center"
            >
              HIII THERE
            </h1>
          </div>
          <div className="flex justify-center items-center mt-2">
            <h1
              ref={nameRef}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-center"
            >
              I'M VISHWANATH
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-2">
            <img
              ref={roboRef}
              className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-56 lg:w-56"
              src={robo}
              alt="Robot"
            />
            <div
              ref={softwareRef}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold
                bg-gradient-to-r from-red-400 to-purple-600
                text-transparent bg-clip-text
                border-2 border-dashed border-orange-400 p-1 ml-0 md:ml-8 mt-4 md:mt-0 text-center"
            >
              SOFTWARE
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <h1
              ref={engineerRef}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-center"
            >
              ENGINEER
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
