import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { src: "c/c-original.svg", label: "C" },
  { src: "cplusplus/cplusplus-original.svg", label: "C++" },
  { src: "java/java-original.svg", label: "Java" },
  { src: "javascript/javascript-original.svg", label: "JavaScript" },
  { src: "python/python-original.svg", label: "Python" },
  { src: "react/react-original.svg", label: "React" },
  { src: "html5/html5-original.svg", label: "HTML5" },
  { src: "css3/css3-original.svg", label: "CSS3" },
  { src: "github/github-original.svg", label: "GitHub" },
  { src: "firebase/firebase-original.svg", label: "Firebase" },
  { src: "nodejs/nodejs-original-wordmark.svg", label: "Node.js" },
  { src: "express/express-original.svg", label: "Express" },
  { src: "mongodb/mongodb-original.svg", label: "MongoDB" },
  { src: "mysql/mysql-original-wordmark.svg", label: "MySQL" },
  { src: "linux/linux-original.svg", label: "Linux" },
  { src: "https://cdn.worldvectorlogo.com/logos/vercel.svg", label: "Vercel", External: true },
  { src: "https://us1.discourse-cdn.com/flex016/uploads/render/original/2X/1/11352202c8503f736bea5efb59684f678d7c860c.svg", label: "Render", External: true },
];

const Skills = () => {
  const sectionRef = useRef()
  const gridRef = useRef([])
  // Clear the ref on every render
  gridRef.current = []

  useEffect(() => {
    if (gridRef.current.length > 0) {
      gsap.fromTo(
        gridRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", // when section enters viewport
            // markers: true, // uncomment to debug
          }
        }
      )
    }
  }, [])

  return (
    <>
      <div
        ref={sectionRef}
        className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16 px-4"
      >
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg tracking-wide">
            Skills
          </h2>
          <p className="mt-4 text-lg text-gray-300 font-medium max-w-xl text-center">
            Technologies and tools I use to build amazing projects.
          </p>
        </div>
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-y-14 gap-x-10 px-10">
            {skills.map((item, idx) => (
              <div
                key={idx}
                ref={el => (gridRef.current[idx] = el)}
                className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-110 opacity-0"
                // ^ Start as invisible for animation
              >
                <div className="bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 rounded-2xl shadow-lg p-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-pink-500/30">
                  {item.External ?
                    <img
                      className="h-24 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      src={item.src}
                      alt={item.label}
                    /> :
                    <img
                      className="h-24 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.src}`}
                      alt={item.label}
                    />}
                </div>
                <p className="mt-3 font-semibold text-gray-100 tracking-wide text-lg group-hover:text-pink-400 transition-colors duration-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation-name: twinkle;
          animation-iteration-count: infinite;
        }
        `}
      </style>
    </>
  )
}

export default Skills
