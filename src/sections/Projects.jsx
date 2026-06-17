import React, { useState } from 'react'
import { myProjects } from '../constants'

const projectCount = myProjects.length

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

    const currentProject = myProjects[selectedProjectIndex]

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            }

            return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
        })
    }

    return (
        <section id="work" className="c-space my-20">
            <p className="head-text">My work</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-5 w-full">

                {/* Project Info */}
                <div className="flex flex-col gap-5 relative sm:p-10 py-8 px-5 shadow-2xl shadow-black-200 min-h-[500px] rounded-xl border border-black-300 bg-black-200">

                    <div className="hidden sm:block absolute top-4 right-4 pointer-events-none">
                        <img
                            src={currentProject.spotlight}
                            alt="spotlight"
                            className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-xl shadow-inner"
                            loading="lazy"
                        />
                    </div>

                    <div
                        className="p-3 backdrop-blur-3xl w-fit rounded-lg"
                        style={currentProject.logoStyle}
                    >
                        <img
                            src={currentProject.logo}
                            alt="logo"
                            className="w-10 h-10 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-xl sm:text-2xl font-semibold text-white animatedText">
                            {currentProject.title}
                        </p>

                        <p className="animatedText">
                            {currentProject.desc}
                        </p>

                        <p className="animatedText">
                            {currentProject.subdesc}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 z-10">

                        <div className="flex items-center gap-3 flex-wrap">
                            {currentProject.tags?.map((tag) => (
                                <div key={tag.name} className="tech-logo">
                                    <img
                                        src={tag.path}
                                        alt={tag.name}
                                    />
                                </div>
                            ))}
                        </div>

                        <a
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                        >
                            <p>Check Live Site</p>

                            <img
                                src="/assets/arrow-up.png"
                                className="w-3 h-3"
                                alt="arrow"
                            />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-auto pt-5">
                        <button
                            className="arrow-btn"
                            onClick={() => handleNavigation('previous')}
                        >
                            <img
                                src="/assets/left-arrow.png"
                                alt="left arrow"
                                className="w-4 h-4"
                            />
                        </button>

                        <button
                            className="arrow-btn"
                            onClick={() => handleNavigation('next')}
                        >
                            <img
                                src="/assets/right-arrow.png"
                                alt="right arrow"
                                className="w-4 h-4"
                            />
                        </button>
                    </div>
                </div>

                {/* Project Preview */}
                <div className="border border-black-300 bg-black-200 rounded-xl overflow-hidden min-h-[300px] lg:min-h-full">

                    <div className="w-full h-full flex items-center justify-center">

                        {/* Desktop / Tablet */}
                        <div className="hidden sm:block w-full h-[500px] lg:h-full p-2">
                            <div className="w-full h-full rounded-xl overflow-hidden border border-black-300 bg-black">
                                <video
                                    src={currentProject.texture}
                                    poster={currentProject.spotlight}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="block sm:hidden w-full h-[250px]">
                            <video
                                src={currentProject.texture}
                                poster={currentProject.spotlight}
                                controls
                                muted
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-contain"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects