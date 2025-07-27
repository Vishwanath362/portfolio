import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const leftRef = useRef()
  const rightRef = useRef()
  const containerRef = useRef()

  useEffect(() => {
    // Animate left part in - from left
    gsap.fromTo(
      leftRef.current,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          // markers: true, // Uncomment for debug markers
        }
      }
    )
    // Animate right part in - from right
    gsap.fromTo(
      rightRef.current,
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <div
      id='about'
      ref={containerRef}
      className="relative bg-black min-h-[50vh] text-white overflow-hidden py-12 px-6"
    >
      {/* Enhanced particle effect */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full animate-pulse ${
            i % 3 === 0 ? 'bg-blue-400 w-1 h-1'
            : i % 3 === 1 ? 'bg-purple-400 w-0.5 h-0.5'
            : 'bg-white w-px h-px'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            opacity: 0.3 + Math.random() * 0.7,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/20 to-blue-900/10 pointer-events-none" />

      <div className='relative z-10 max-w-6xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16'>
          {/* Left section - Enhanced typography */}
          <div ref={leftRef} className='flex-shrink-0 text-center lg:text-left'>
            <div className='relative'>
              {/* Glowing accent line */}
              <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-60 hidden lg:block"></div>
              <h2 className='font-black text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight'>
                <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  DISCOVER THE
                </span>
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mt-1">
                  PROFESSIONAL
                </span>
                <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mt-1">
                  JOURNEY
                </span>
                <span className="block text-gray-300 mt-2 text-2xl md:text-3xl lg:text-4xl">
                  OF SOFTWARE
                </span>
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  ENGINEER
                </span>
              </h2>
            </div>
          </div>

          {/* Right section - Info Card */}
          <div ref={rightRef} className='flex-1 max-w-xl'>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl border border-gray-700/50 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-blue-300 font-semibold text-sm tracking-wide">FULL-STACK DEVELOPER</span>
                </div>

                <p className='text-gray-100 leading-relaxed text-lg font-medium mb-6'>
                  Results-driven Software Developer with full-stack expertise in
                  <span className="text-blue-300 font-semibold"> React</span>,
                  <span className="text-green-300 font-semibold"> Node.js</span>,
                  <span className="text-yellow-300 font-semibold"> Express.js</span>,
                  <span className="text-emerald-300 font-semibold"> MongoDB</span>,
                  <span className="text-orange-300 font-semibold"> Java</span>, and
                  <span className="text-purple-300 font-semibold"> C++</span>.
                </p>

                <p className='text-gray-300 leading-relaxed text-base'>
                  Skilled in building responsive, user-focused web applications with strong
                  UI/UX design, Agile practices, and performance optimization. Solid foundation
                  in Data Structures & Algorithms, with a proven track record of delivering
                  impactful, end-to-end projects.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {['React', 'Node.js', 'Express.js', 'MongoDB', 'Java', 'C++', 'UI/UX', 'Agile'].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-blue-400/50 transition-colors duration-200"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default AboutMe
