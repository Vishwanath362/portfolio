import React from 'react'

const AboutMe = () => {
    return (
        <div id='about' className="relative bg-black min-h-[40vh] text-white overflow-hidden py-8 px-4">
            {/* Rain effect background layer */}
            {[...Array(15)].map((_, i) => (
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

            <div className='flex flex-col md:flex-row items-center md:justify-evenly gap-8 md:gap-0 mt-8 md:mt-16 mb-16 md:mb-32'>
                <div className='font-bold flex flex-col items-center md:items-start h-auto md:h-40 text-2xl md:text-4xl p-2'>
                    <h5>DISCOVER THE</h5>
                    <h5>PROFESSIONAL</h5>
                    <h5>JOURNEY</h5>
                    <h5>OF SOFTWARE</h5>
                    <h5>ENGINEER</h5>
                </div>
                <div className='flex flex-wrap w-full md:w-80 font-bold text-base md:text-lg'>
                    <p>
                        Results-driven Software Developer with full-stack expertise in React, Node.js, MongoDB, and C++. Skilled in building responsive, user-focused
                        web apps with strong UI/UX design, Agile practices, and performance optimization. Solid foundation in Data Structures &amp;
                        Algorithms, with a proven track record of delivering impactful, end-to-end projects.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
