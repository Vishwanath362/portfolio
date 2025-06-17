import React from 'react'

const AboutMe = () => {
    return (
        <div id='about' className="relative bg-black h-1/3 text-white overflow-hidden">
            {/* Rain effect background layer */}
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

            <div className='h-2/3 w-full flex justify-evenly mt-16 mb-32'>
                <div className='font-bold justify-center h-40 text-4xl p-2'>
                    <h5>DISCOVER THE</h5>
                    <h5>PROFESSIONAL</h5>
                    <h5>JOURNEY</h5>
                    <h5>OF SOFTWARE</h5>
                    <h5>ENGINEER</h5>
                </div>
                <div className='flex flex-wrap w-80 font-bold'>
                    <p >Results-driven Software Developer with full-stack expertise in React, Node.js, MongoDB, and C++. Skilled in building responsive, userfocused
                        web apps with strong UI/UX design, Agile practices, and performance optimization. Solid foundation in Data Structures &
                        Algorithms, with a proven track record of delivering impactful, end-to-end projects.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
