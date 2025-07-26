"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Experience",
        id: "experience",
        content: (
          <ul className="list-disc pl-2 space-y-6">
            <li>
              <div className="underline font-bold">Software Engineer at G.tech (Jul 2025 - Present)</div>
              <ul className="list-disc pl-4">
                <li>
                  Built and deployed a YOLOv11-based vision model to detect barrier anomalies (stuck, normal, dropped) with 87% mAP@50; integrated with FastAPI and Docker for real-time inference on AWS.
                </li>
              </ul>
            </li>
      
            <li>
              <div className="underline font-bold">Junior Software Engineer at BeMyGuest (Mar 2023 - Dec 2024)</div>
              <ul className="list-disc pl-4">
                <li>
                  Integrated third-party APIs using Laravel and REST/SOAP, automating booking distribution for partners like the EPL and Sentosa, boosting efficiency by 75% with platforms like Agoda and Lazada.
                </li>
                <li>
                  Used Sentry, ELK stack, and Grafana to troubleshoot API latency, cutting issue resolution time by 25% and improving system responsiveness by 30% for 3+ teams.
                </li>
              </ul>
            </li>
          </ul>
        )
      },
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li><span className="underline bold">Programming Languages: </span>Python, Javascript, PHP, Java, HTML, CSS</li>
                <li><span className="underline bold">Frontend: </span>React.js, Next.js, Vue.js, CSS Tailwind, Bootstrap</li>
                <li><span className="underline bold">Backend: </span>Node.js, Express.js, Django, Laravel</li>
                <li><span className="underline bold">Data Science/ML/AI Tools: </span>Numpy, Pandas, Scikit-learn, TensorFlow, PyTorch, OpenCV, Keras</li>
                <li><span className="underline bold">Database/DevOps: </span>MySQL, MongoDB, CI/CD, Github (Version Control), Git, Deployment, Docker</li>
                <li><span className="underline bold">Monitoring and Logging: </span>ELK Stack (Elasticsearch, Logstash, Kibana), Grafana, Sentry</li>
                <li><span className="underline bold">Other Skills/Soft Skills: </span>Portfolio Management, Trading, Financial Analysis, Data Analytics, Math and Statistics, Communication, Collaboration, Attention to Detail, Stakeholder Management</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: 'education',
        content: (
            <ul className="list-disc pl-2">
                <li>General Assembly Software Engineering Immersive</li>
                <li>Singapore University of Technology and Design Computer Science and Design</li>
                <li>University of London Computer Science (Machine Learning/Artificial Intelligence)</li>
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