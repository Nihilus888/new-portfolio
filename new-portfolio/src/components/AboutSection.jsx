"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Experience",
        id: "experience",
        content:(
            <ul className="list-disc pl-2">
                <div className="underline bold text-decoration-2">Junior Software Engineer at BeMyGuest (March 2023 - Present)</div>
                <li>
                    Built API Integration with Lazada, English Premier League and Sentosa
                </li>
                <li>Built internal tools with other software engineers such as our dashboard to help other teams to streamline efficiency</li>
                <li>Debugging front-end and back-end features to ensure optimality for customers to book tickets from our different distribution partners</li>
                <li>Using data analytics and data science to do data visualization and predict ticket sales with an accuracy of up to 95%</li>
            </ul>
        )
    },
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Laravel</li>
                <li>React</li>
                <li>Vue</li>
                <li>Tailwind CSS</li>
                <li>Python</li>
                <li>Data Science/Machine Learning</li>
                <li>Data Analytics</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: 'education',
        content: (
            <ul className="list-disc pl-2">
                <li>General Assembly Software Engineering Immersive</li>
                <li>Singapore University of Technology and Design</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li><a href="https://www.freecodecamp.org/certification/Nihilus888/responsive-web-design" 
                       className="relative inline-block hover:text-purple-600 hover:underline transition duration-300 transform hover:-translate-y-1">
                    Responsive Web Design
                    </a>
                </li>
                <li><a href="https://www.freecodecamp.org/certification/Nihilus888/data-analysis-with-python-v7"
                    className="relative inline-block hover:text-purple-600 hover:underline transition duration-300 transform hover:-translate-y-1">
                    Data Analysis with Python
                </a>
                </li>
                <li><a href="https://www.coursera.org/account/accomplishments/verify/DTE9F6SFAXHG"
                    className="relative inline-block hover:text-purple-600 hover:underline transition duration-300 transform hover:-translate-y-1">
                    Game Theory
                </a>
                </li>
                <li><a href="https://www.coursera.org/account/accomplishments/verify/VF2F5DYGFN8F"
                    className="relative inline-block hover:text-purple-600 hover:underline transition duration-300 transform hover:-translate-y-1">
                    Cryptography I
                </a>
                </li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/SHDCXEULE4NJ"
                    className="relative inline-block hover:text-purple-600 hover:underline transition duration-300 transform hover:-translate-y-1">
                    Financial Markets
                    </a>
                </li>
            </ul>
        )
    },
    {
        title: "Extracurricular",
        id: "extracurricular",
        content: (
            <ul className="list-disc pl-2">
                <li className="underline">President of SUTD MarketWatch (2020-2021)</li>
                <p>- Develop relationships with banks and other financial institutions to provide finance education to students</p>

                <li className="underline">Investing Note Trading Competition 2022</li>
                <p>- Generated 12% in two weeks and top 3% among 5000 participants from trading CFDs in SGX, Hang Seng, and Nasdaq equities</p>
                
                <li className="underline">Citi Bank-YMCA Entrepreneur Competition</li>
                <p>- Raised over $20,000 for a charity organization and won Distinguished Entrepreneur Award</p>
            </ul>
          )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState('experience');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
          setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/computer.jpg" width={500} height={500} alt="computer image"/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-lg underline bold decoration-2">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Welcome! I am Elliott, a passionate and versatile professional with a multifaceted skill set in software engineering, data science, and a wide range of interdisciplinary domains. I thrive on exploring complex problems, building innovative solutions, and continuously learning across various fields.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}>
                            {" "}
                            Experience {" "}
                            </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}>
                            {" "}
                            Skills {" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}>
                            {" "}
                            Education {" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab === "certifications"}>
                            {" "}
                            Certifications {" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("extracurricular")} 
                            active={tab === "extracurricular"}>
                            {" "}
                            Extracurricular {" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection