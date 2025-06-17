import React from 'react'
import findMyFamily from '../assets/findMyFamily.png'
import royalNest from '../assets/royalNest.png'
import fitFusion from '../assets/fitFusion.png'
const Projects = () => {
    return (
        <>
            <div id='projects' className="relative bg-black h-1/3 text-white overflow-hidden ">

                {[...Array(10)].map((_, i) => (
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
            </div>
            <div className='flex flex-col bg-gradient-to-tr from-gray-950 via-gray-900 to-black pt-20 w-full min-h-screen'>

                <div className='flex items-center justify-center w-full'>
                    <h3 className='text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg tracking-wide'>
                        Projects
                    </h3>
                </div>


                <div className='outline-double outline-red-400 w-[94%] mx-auto my-10 rounded-xl bg-gray-800 p-12'>
                    <h5 className='text-white font-bold text-3xl pb-6 border-b border-red-400'>Web Projects</h5>


                    <div className='flex flex-col scale-90 mt-10 md:flex-row items-start gap-6  bg-gray-600 p-6 rounded-md transition-transform duration-300 hover:scale-100'>

                        <img
                            className='h-[380px] w-full md:w-1/3 rounded-lg shadow-lg'
                            src={findMyFamily}
                            alt="Find My Family App"
                        />

                        <div className='text-white md:w-2/3 space-y-4'>
                            <h4 className='font-bold text-2xl mb-2'>1. Find My Family App</h4>

                            <p className='text-lg leading-relaxed text-gray-300'>
                                <span className='text-pink-400 font-semibold'>Find My Family</span> is a location-based web application that keeps you connected with your loved ones.
                                It offers features like <span className='text-purple-400'>real-time location tracking</span>,
                                <span className='text-indigo-400'> emergency alerts</span>, and
                                <span className='text-blue-400'> geofencing</span> to notify users when someone enters or exits a predefined area — all designed with family safety in mind.
                            </p>

                            <ul className='list-disc list-inside text-gray-300 text-lg space-y-1'>
                                <li>
                                    <span className='font-semibold text-green-400 hover:font-bold'>User Authentication:</span> Users can sign up and log in securely using Firebase Authentication.
                                </li>
                                <li>
                                    <span className='font-semibold text-yellow-400 hover:font-bold'>Family Group Management:</span> Users can create new family groups or join existing ones using a unique group code or invitation. Each user is linked to a specific family group.
                                </li>
                                <li>
                                    <span className='font-semibold text-purple-400 hover:font-bold'>Real-Time Location Tracking:</span> Members of the same family group can see each other's real-time locations on an interactive map powered by Leaflet. Location updates are handled live using Firebase Realtime Database.
                                </li>
                            </ul>

                            <p className='text-lg text-gray-300'>
                                <span className='font-semibold text-cyan-400 hover:font-bold'>Tech stack:</span> React, Tailwind CSS, Firebase, and Leaflet.
                            </p>

                            <a
                                href='https://find-my-family.vercel.app/'
                                className='inline-block mt-2 text-blue-400 underline hover:text-blue-300 transition'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Try the App Now — Find My Family App
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col scale-90 mt-10 md:flex-row items-start gap-6 bg-gray-600 p-6 rounded-md transition-transform duration-300 hover:scale-100'>

                        <img
                            className='h-[380px] w-full md:w-1/3 rounded-lg shadow-lg'
                            src={royalNest}
                            alt="RoyalNest Hotel Booking App"
                        />

                        <div className='text-white md:w-2/3 space-y-4'>
                            <h4 className='font-bold text-2xl mb-2'>1. RoyalNest Hotel Booking App(Group Project)</h4>

                            <p className='text-lg leading-relaxed text-gray-300'>
                                <span className='text-pink-400 font-semibold'>RoyalNest</span> is a hotel booking web application that allows users to browse and reserve rooms with ease. It features real-time room reservation updates and secure user authentication.
                            </p>

                            <ul className='list-disc list-inside text-gray-300 text-lg space-y-1'>
                                <li>
                                    <span className='font-semibold text-green-400 hover:font-bold'>User Authentication:</span> Signup and login using MongoDB.
                                </li>
                                <li>
                                    <span className='font-semibold text-yellow-400 hover:font-bold'>Hotel Booking:</span> Users can browse and book hotel rooms.
                                </li>
                                <li>
                                    <span className='font-semibold text-purple-400 hover:font-bold'>Reserved Rooms:</span> Displays a list of reserved rooms in real time.
                                </li>
                            </ul>

                            <p className='text-lg text-gray-300'>
                                <span className='font-semibold text-cyan-400 hover:font-bold'>Tech stack:</span> EJS, Express, MongoDB (Atlas), CSS. Deployed on Render (cold start may cause slight delay).
                            </p>

                            <a
                                href='https://royalnest.onrender.com/'
                                className='inline-block mt-2 text-blue-400 underline hover:text-blue-300 transition'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Try the App Now — RoyalNest
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col scale-90 mt-10 md:flex-row items-start gap-6 bg-gray-600 p-6 rounded-md transition-transform duration-300 hover:scale-100'>

                        <img
                            className='h-[380px] w-full md:w-1/3 rounded-lg shadow-lg object-cover'
                            src={fitFusion} // Replace with actual image or import
                            alt="FitFusion App"
                        />

                        <div className='text-white md:w-2/3 space-y-4'>
                            <h4 className='font-bold text-2xl mb-2'>3. FitFusion Web App(Group Project)</h4>

                            <p className='text-lg leading-relaxed text-gray-300'>
                                <span className='text-pink-400 font-semibold'>FitFusion</span> is a fitness-focused web application that helps users explore information about various exercises and the muscles they target. It's built with a clean and responsive interface that promotes an engaging and informative user experience.
                            </p>

                            <ul className='list-disc list-inside text-gray-300 text-lg space-y-1'>
                                <li>
                                    <span className='font-semibold text-green-400 hover:font-bold'>Exercise Directory:</span> Users can browse a wide range of exercises categorized by muscle groups and types.
                                </li>
                                <li>
                                    <span className='font-semibold text-yellow-400 hover:font-bold'>Muscle Group Info:</span> Detailed insights into different muscles and recommended workouts for each.
                                </li>
                                <li>
                                    <span className='font-semibold text-purple-400 hover:font-bold'>Responsive UI:</span> Optimized layout for desktop and mobile for a seamless fitness browsing experience.
                                </li>
                                <li>
                                    <span className='font-semibold text-blue-400 hover:font-bold'>Team Collaboration:</span> Developed as a group frontend project with a focus on educational content and usability.
                                </li>
                            </ul>

                            <p className='text-lg text-gray-300'>
                                <span className='font-semibold text-cyan-400 hover:font-bold'>Tech stack:</span> HTML, CSS, JavaScript.
                            </p>

                            <a
                                href='https://jirenxmoksh.github.io/FEE-II-PRJ/'
                                className='inline-block mt-2 text-blue-400 underline hover:text-blue-300 transition'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Try the App Now — FitFusion
                            </a>
                        </div>
                    </div>




                </div>
                <div className='outline-double outline-yellow-400 w-[94%] mx-auto my-10 rounded-xl bg-gray-800 p-12'>
                    <h5 className='text-white font-bold text-3xl pb-6 border-b border-yellow-400'>Miscellaneous Web Projects</h5>

                    <ul className='list-disc list-inside text-gray-300 text-lg space-y-2'>
                        <li>
                            <a
                                href='https://vishwanath362.github.io/tic-tac-toe-game/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-400 underline hover:text-blue-300 transition'
                            >
                                Tic-Tac-Toe
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://vishwanath362.github.io/TO-DO-LIST/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-400 underline hover:text-blue-300 transition'
                            >
                                To Do List
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://vishwanath362.github.io/AmazonClone/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-400 underline hover:text-blue-300 transition'
                            >
                                Amazon Home Page Clone
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://hpe-fund.vercel.app/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-400 underline hover:text-blue-300 transition'
                            >
                                HopeFund(WEB3)(Group Project)
                            </a>
                        </li>

                    </ul>
                </div>
                <div className='outline-double outline-green-400 w-[94%] mx-auto my-10 rounded-xl bg-gray-800 p-12'>
                    <h5 className='text-white font-bold text-3xl pb-6 border-b border-red-400'>System-Level Projects</h5>


                    <a href="#" title="Tooltip text">Hover me</a>

                    <div className='flex flex-col scale-90 mt-10 md:flex-row items-start gap-6 bg-gray-600 p-6 rounded-md transition-transform duration-300 hover:scale-100'>



                        <div className='text-white md:w-2/3 space-y-4'>
                            <h4 className='font-bold text-2xl mb-2'>
                                1. File-Based Process Scheduling Management System in Java(Group Project)
                            </h4>

                            <p className='text-lg leading-relaxed text-gray-300'>
                                <span className='text-pink-400 font-semibold'>
                                    File-Based Process Scheduling Management System
                                </span>{' '}
                                is a Java-based application that simulates CPU scheduling and memory management to demonstrate core Operating System concepts. It allows users to input process details and observe how different scheduling algorithms perform.
                            </p>

                            <ul className='list-disc list-inside text-gray-300 text-lg space-y-1'>
                                <li>
                                    <span className='font-semibold text-green-400 hover:font-bold'>User Inputs:</span> Number of processes, burst time, arrival time, and priority.
                                </li>
                                <li>
                                    <span className='font-semibold text-yellow-400 hover:font-bold'>Scheduling Algorithms:</span> Implements FCFS, SJF (non-preemptive & preemptive), and Round Robin.
                                </li>
                                <li>
                                    <span className='font-semibold text-purple-400 hover:font-bold'>Memory Management:</span> Includes Page Replacement algorithm implementations.
                                </li>
                            </ul>

                            <p className='text-lg text-gray-300'>
                                <span className='font-semibold text-cyan-400 hover:font-bold'>Tech stack:</span> Java, File I/O, Object-Oriented Programming.
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
                    <div className='flex flex-col scale-90 mt-10 md:flex-row items-start gap-6 bg-gray-600 p-6 rounded-md transition-transform duration-300 hover:scale-100'>
                        <div className='text-white md:w-2/3 space-y-4'>
                            <h4 className='font-bold text-2xl mb-2'>3. Smart Linux User Management System (Group Project)</h4>

                            <p className='text-lg leading-relaxed text-gray-300'>
                                <span className='text-pink-400 font-semibold'>Smart Linux User Management System</span> is a terminal-based user management tool built with Shell scripting and <code className='text-yellow-300'>dialog</code> to offer an interactive, secure interface for handling common Linux user administration tasks.
                            </p>

                            <ul className='list-disc list-inside text-gray-300 text-lg space-y-1'>
                                <li>
                                    <span className='font-semibold text-green-400 hover:font-bold'>User Management:</span> Create, delete, lock/unlock user accounts directly from the terminal.
                                </li>
                                <li>
                                    <span className='font-semibold text-yellow-400 hover:font-bold'>Interactive UI:</span> Built with <code className='text-yellow-300'>dialog</code> for a menu-driven experience within the shell.
                                </li>
                                <li>
                                    <span className='font-semibold text-purple-400 hover:font-bold'>Secure Scripting:</span> Emphasis on error handling, input validation, and least-privilege principles.
                                </li>
                                <li>
                                    <span className='font-semibold text-blue-400 hover:font-bold'>Team Collaboration:</span> Group project focused on practical shell scripting and real-world sysadmin automation.
                                </li>
                            </ul>

                            <p className='text-lg text-gray-300'>
                                <span className='font-semibold text-cyan-400 hover:font-bold'>Tech stack:</span> Bash, Shell Script, Dialog, Linux Command-line Tools.
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

            </div>



        </>
    )
}

export default Projects
