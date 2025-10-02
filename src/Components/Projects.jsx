import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import findMyFamily from '../assets/findMyFamily.png'
import royalNest from '../assets/royalNest.png'
import fitFusion from '../assets/fitFusion.png'
import songifyImage from '../assets/Songify.png'
import taskflowImage from '../assets/taskflowImage.png'

gsap.registerPlugin(ScrollTrigger)

const MiscellaneousProjects = [
  {
    title: 'URL Shortener',
    url: 'https://github.com/Vishwanath362/URL_Shortner',
    description: 'Full-stack URL shortening service with analytics, custom aliases, and expiration dates',
    tech: ['React', 'MongoDB', 'Express', 'Node.js'],
    category: 'Web App'
  },
  {
    title: 'Tic-Tac-Toe',
    url: 'https://vishwanath362.github.io/tic-tac-toe-game/',
    description: 'Interactive game built with vanilla JavaScript featuring AI opponent and smooth animations',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'Game'
  },
  {
    title: 'To Do List',
    url: 'https://vishwanath362.github.io/TO-DO-LIST/',
    description: 'Task management app with local storage, priority levels, and intuitive user interface',
    tech: ['JavaScript', 'LocalStorage', 'DOM'],
    category: 'Productivity'
  },
  {
    title: 'Amazon Home Page Clone',
    url: 'https://vishwanath362.github.io/AmazonClone/',
    description: "Pixel-perfect recreation of Amazon's homepage with responsive design and modern layout",
    tech: ['HTML', 'CSS', 'Responsive'],
    category: 'Clone'
  },
  {
    title: 'HopeFund (WEB3)',
    url: 'https://hpe-fund.vercel.app/',
    description: 'Decentralized crowdfunding platform built on blockchain technology for transparent donations',
    tech: ['React', 'Web3', 'Blockchain'],
    category: 'Web3',
    isGroup: true
  }
]

const Projects = () => {
  // MAIN WEB APPS cards refs for staggered reveal
  const cardsRef = useRef([])
  cardsRef.current = []

  const miscRef = useRef()
  const sysRef = useRef()
  const sectionRef = useRef()

  // Animate on scroll
  useEffect(() => {
    // Animate section heading
    gsap.fromTo(
      sectionRef.current,
      { y: 64, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    )

    // Animate Main Web App cards staggered
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.18, ease: 'power4.out',
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
          }
        }
      )
    }

    // Animate Miscellaneous projects grid
    if (miscRef.current) {
      gsap.fromTo(
        miscRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power4.out',
          scrollTrigger: {
            trigger: miscRef.current,
            start: "top 90%",
          }
        }
      )
    }

    // Animate System-level projects
    if (sysRef.current) {
      gsap.fromTo(
        sysRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power4.out',
          scrollTrigger: {
            trigger: sysRef.current,
            start: "top 92%",
          }
        }
      )
    }
  }, [])

  return (
    <div id='projects' className="relative bg-black min-h-[50vh] text-white overflow-hidden py-12 px-6">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full animate-pulse ${i % 3 === 0 ? 'bg-blue-400 w-1 h-1' :
              i % 3 === 1 ? 'bg-purple-400 w-0.5 h-0.5' :
                'bg-white w-px h-px'
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

      {/* Projects Heading */}
      <section
        ref={sectionRef}
        className='relative z-10 flex flex-col items-center w-full pt-16 pb-6'
      >
        <h2 className='text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg tracking-wide'>
          Projects
        </h2>
      </section>

      {/* Main Web Apps (animates each card staggered) */}
      <section className='relative z-10 w-[98%] md:w-[92%] mx-auto bg-gray-900/90 rounded-xl p-4 md:p-10 shadow-xl mb-10'>
        <h3 className='text-white font-bold text-2xl md:text-3xl pb-4 border-b border-pink-500 mb-6'>
          Main Web Apps
        </h3>
        <div className='flex flex-col gap-8 w-full'>
          <ProjectCard
            ref={el => cardsRef.current[0] = el}
            num={1}
            name='Find My Family App'
            img={findMyFamily}
            link='https://find-my-family.vercel.app/'
            description={
              <>
                <span className='text-pink-400 font-semibold'>Find My Family</span> is a location-based web app for family safety. Features <span className='text-purple-400'>real-time tracking</span>, <span className='text-indigo-400'>emergency alerts</span>, and <span className='text-blue-400'>geofencing</span>.
              </>
            }
            points={[
              <><span className='font-semibold text-green-400'>User Authentication:</span> Secure sign up & log in via Firebase.</>,
              <><span className='font-semibold text-yellow-400'>Family Group Management:</span> Create/join with group code or invite.</>,
              <><span className='font-semibold text-purple-400'>Real-Time Location Tracking:</span> Live map using Leaflet, broadcasts via Firebase.</>,
            ]}
            tech='React, Tailwind CSS, Firebase, Leaflet'
            btnLabel='Try the App Now — Find My Family App'
          />
          <ProjectCard
            ref={el => cardsRef.current[1] = el}
            num={2}
            name='Songify — Music Sharing Platform'
            img={songifyImage}
            link='https://songify2.onrender.com'
            description={
              <>
                <span className='text-pink-400 font-semibold'>Songify</span> is a platform for uploading and sharing music. <span className='text-green-400'>Private uploads</span>, <span className='text-blue-400'>creator libraries</span>, and a <span className='text-yellow-300'>Trending section</span>.
              </>
            }
            points={[
              <><span className='font-semibold text-green-400'>User Authentication:</span> Secure, collection-based management.</>,
              <><span className='font-semibold text-yellow-400'>Music Upload & Privacy:</span> Control public/private visibility.</>,
              <><span className='font-semibold text-purple-400'>Public Feed & Trending:</span> Trending discoverability.</>,
            ]}
            tech='React, Tailwind CSS, Express.js, MongoDB Atlas, Cloudinary, Lucide React'
            btnLabel='Try the App Now — Songify Music Platform'
          />
          <ProjectCard
            ref={el => cardsRef.current[2] = el}
            num={3}
            name='RoyalNest Hotel Booking App (Group Project)'
            img={royalNest}
            link='https://royalnest.onrender.com/'
            description={
              <>
                <span className='text-pink-400 font-semibold'>RoyalNest</span> is a hotel booking app with <span className='text-purple-400'>real-time booking updates</span> and secure login.
              </>
            }
            points={[
              <><span className='font-semibold text-green-400'>User Authentication:</span> MongoDB-based sign up/login.</>,
              <><span className='font-semibold text-yellow-400'>Hotel Booking:</span> Search and reserve hotels instantly.</>,
              <><span className='font-semibold text-purple-400'>Reserved Rooms:</span> Track bookings live.</>,
            ]}
            tech='EJS, Express, MongoDB Atlas, CSS'
            btnLabel='Try the App Now — RoyalNest'
          />
          <ProjectCard
            ref={el => cardsRef.current[3] = el}
            num={4}
            name='TaskFlow — Task Management App'
            img={taskflowImage}
            link='' // not deployed yet
            description={
              <>
                <span className='text-pink-400 font-semibold'>TaskFlow</span> is a productivity app for managing tasks with <span className='text-green-400'>login/signup authentication</span>, <span className='text-blue-400'>priority-based tags</span>, and full <span className='text-yellow-300'>CRUD functionality</span>.
              </>
            }
            points={[
              <><span className='font-semibold text-green-400'>User Authentication:</span> Secure login/signup and user-specific task management.</>,
              <><span className='font-semibold text-yellow-400'>Task Management:</span> Add, update, delete tasks efficiently.</>,
              <><span className='font-semibold text-purple-400'>Priority Tags:</span> Organize tasks with priority-based labels for easy tracking.</>,
            ]}
            tech='React, Tailwind CSS, Express.js, MongoDB'
            btnLabel='Coming Soon — TaskFlow App'
          />

          {/* <ProjectCard
            ref={el => cardsRef.current[4] = el}
            num={5}
            name='FitFusion Web App (Group Project)'
            img={fitFusion}
            link='https://jirenxmoksh.github.io/FEE-II-PRJ/'
            description={
              <>
                <span className='text-pink-400 font-semibold'>FitFusion</span> is a fitness app with muscle-targeted exercises and educational tools.
              </>
            }
            points={[
              <><span className='font-semibold text-green-400'>Exercise Directory:</span> Fully categorized, searchable UI.</>,
              <><span className='font-semibold text-yellow-400'>Muscle Group Info:</span> In-depth guidance; relevant routines.</>,
              <><span className='font-semibold text-purple-400'>Responsive UI:</span> Seamless desktop/mobile experience.</>,
              <><span className='font-semibold text-blue-400'>Team Collaboration:</span> Group frontend project with a learning focus.</>,
            ]}
            tech='HTML, CSS, JavaScript'
            btnLabel='Try the App Now — FitFusion'
          /> */}
        </div>
      </section>

      {/* Miscellaneous Projects with fade-in */}
      <section ref={miscRef} className='relative z-10 w-[98%] md:w-[92%] mx-auto my-10 opacity-0'>
        <div className='flex items-center mb-8'>
          <div className='w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mr-4'></div>
          <div>
            <h2 className='font-black text-2xl md:text-4xl mb-1'>
              <span className='bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'>Miscellaneous</span>
              <span className='text-white'> Web Projects</span>
            </h2>
            <p className='text-sm md:text-base text-gray-400'>
              Explore my diverse collection of web applications and experiments
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          {MiscellaneousProjects.map((project) => (
            <div
              key={project.title}
              className='relative group bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-xl border border-gray-700/50 p-6 md:p-8 hover:border-yellow-400/40 transition-all duration-300 hover:scale-[1.01]'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
              <div className='flex flex-col gap-2 relative z-10'>
                <div className='flex flex-row gap-2 items-center'>
                  <div className='w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-2' />
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-bold text-lg hover:text-yellow-400 transition'
                  >
                    {project.title}
                  </a>
                  {project.isGroup && (
                    <span className='ml-2 px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-400/20'>
                      GROUP PROJECT
                    </span>
                  )}
                  <span className='ml-auto px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-300 text-xs font-semibold border border-yellow-400/30'>{project.category}</span>
                </div>
                <div className='text-gray-300 text-base mb-1'>{project.description}</div>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/40 hover:border-yellow-400/40 transition-colors duration-150'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
        </div>
      </section>

      {/* System-Level Projects */}
      <section ref={sysRef} className='w-[98%] md:w-[92%] mx-auto my-10 bg-gray-900/90 rounded-xl p-4 md:p-10 shadow-xl opacity-0'>
        <h5 className='font-bold text-2xl md:text-3xl pb-4 border-b border-green-500 mb-6'>System-Level Projects</h5>
        <div className='flex flex-col gap-10'>
          {/* Java Project */}
          <div className='flex flex-col md:flex-row items-start gap-6 bg-gray-700/70 p-5 rounded-md shadow hover:shadow-lg transition-all'>
            <div className='text-white md:w-2/3 space-y-4'>
              <h4 className='font-bold text-xl md:text-2xl mb-2'>
                1. File-Based Process Scheduling Management System in Java (Group Project)
              </h4>
              <p className='text-base md:text-lg leading-relaxed text-gray-300'>
                <span className='text-pink-400 font-semibold'>
                  File-Based Process Scheduling Management System
                </span>{' '}
                is a Java app simulating core OS concepts: CPU scheduling, memory management, and more. Input process details, see scheduling in action.
              </p>
              <ul className='list-disc pl-4 text-gray-300 text-base space-y-1'>
                <li>
                  <span className='font-semibold text-green-400'>User Inputs:</span> Number of processes, burst time, arrival time, and priority.
                </li>
                <li>
                  <span className='font-semibold text-yellow-400'>Scheduling Algorithms:</span> FCFS, SJF (non/preemptive), Round Robin.
                </li>
                <li>
                  <span className='font-semibold text-purple-400'>Memory Management:</span> Includes page replacement algorithms.
                </li>
              </ul>
              <p className='text-base text-gray-300'>
                <span className='font-semibold text-cyan-400'>Tech stack:</span> Java, File I/O, OOP
              </p>
              <a
                href='https://github.com/SufiyanAnsari07/DSA-JAVA-OOSE-Project?tab=readme-ov-file#dsa-java-oose-project'
                className='inline-block mt-2 text-blue-400 underline hover:text-blue-300 transition'
                target='_blank'
                rel='noopener noreferrer'
              >
                View the Code on GitHub
              </a>
            </div>
          </div>
          {/* Bash Project */}
          <div className='flex flex-col md:flex-row items-start gap-6 bg-gray-700/70 p-5 rounded-md shadow hover:shadow-lg transition-all'>
            <div className='text-white md:w-2/3 space-y-4'>
              <h4 className='font-bold text-xl md:text-2xl mb-2'>2. Smart Linux User Management System (Group Project)</h4>
              <p className='text-base md:text-lg leading-relaxed text-gray-300'>
                <span className='text-pink-400 font-semibold'>Smart Linux User Management System</span>{' '}
                — terminal-based Bash tool with menu-driven user management via <code className='text-yellow-300'>dialog</code>.
              </p>
              <ul className='list-disc pl-4 text-gray-300 text-base space-y-1'>
                <li>
                  <span className='font-semibold text-green-400'>User Management:</span> Create, delete, lock/unlock users from the terminal.
                </li>
                <li>
                  <span className='font-semibold text-yellow-400'>Interactive UI:</span> Menu-based experience with <code className='text-yellow-300'>dialog</code>.
                </li>
                <li>
                  <span className='font-semibold text-purple-400'>Secure Scripting:</span> Robust validation and security.
                </li>
                <li>
                  <span className='font-semibold text-blue-400'>Team Collaboration:</span> Group project for sysadmin practice.
                </li>
              </ul>
              <p className='text-base text-gray-300'>
                <span className='font-semibold text-cyan-400'>Tech stack:</span> Bash, Shell Script, Dialog, Linux CLI
              </p>
              <a
                href='YOUR_GITHUB_REPO_LINK_HERE'
                className='inline-block mt-2 text-blue-400 underline hover:text-blue-300 transition'
                target='_blank'
                rel='noopener noreferrer'
              >
                View Project on GitHub — Smart Linux User Manager
              </a>
            </div>
          </div>
        </div>
      </section>

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

// Card component - now supports ref pass-through for animation
const ProjectCard = React.forwardRef(({ num, name, img, link, description, points = [], tech, btnLabel }, ref) => (
  <div
    ref={ref}
    className="flex flex-col md:flex-row items-start gap-6 bg-gray-700/70 p-6 rounded-md shadow hover:shadow-lg transition-all w-full opacity-0"
  >
    <img
      src={img}
      className="w-full md:w-1/3 rounded-lg shadow object-cover max-h-64 md:max-h-[280px] border border-gray-800"
      alt={name}
      loading='lazy'
      style={{ background: '#18181b' }}
    />
    <div className='flex flex-col justify-between h-full md:w-2/3 space-y-3'>
      <h4 className='font-bold text-xl md:text-2xl mb-1'>{num}. {name}</h4>
      <div className='text-base md:text-lg text-gray-200'>{description}</div>
      <ul className='list-disc list-inside text-gray-300 text-base space-y-1 mt-1'>
        {points.map((pt, idx) => <li key={idx}>{pt}</li>)}
      </ul>
      <p className='text-base text-gray-300 mt-2'>
        <span className='font-semibold text-cyan-400'>Tech stack:</span> {tech}
      </p>
      <a
        href={link}
        className='mt-2 inline-block text-blue-400 underline hover:text-blue-300 transition'
        target='_blank'
        rel='noopener noreferrer'
      >
        {btnLabel}
      </a>
    </div>
  </div>
))

export default Projects
