"use client";
import React from "react";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white text-4xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello I am {" "}</span>
                        <br>
                        </br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Elliott',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'a Software Engineer',
                                1000,
                                'a Data Scientist',
                                1000,
                                'an Investor',
                                1000,
                                'a Trader',
                                1000,
                                'a Polymath',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mt-3">
                        A software engineer with ML/AL and finance knowledge
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                            <a href="https://www.linkedin.com/in/elliott-tay-computing/">Hire Me</a>
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-500 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            <a href="/public/Resume-Elliott-Tay.pdf.pdf"
                                download
                            >
                                Download CV
                            </a>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-400 lg:h-400 relative">
                        <Image
                            src="/images/hero-image.jpg"
                            alt="avatar image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full mt-5"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
