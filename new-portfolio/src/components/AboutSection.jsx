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
                <li>Bootstrap</li>
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
                <li>Responsive Web Design</li>
                <li>Data Analysis with Python</li>
            </ul>
        )
    }
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