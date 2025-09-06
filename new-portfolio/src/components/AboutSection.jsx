"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-3 space-y-6">
          <li>
            <div className="underline font-bold">Project IT Manager at G.Tech (Sep 2025 – Present)</div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Led a team of 5 engineers to build a new carpark management system while contributing hands-on to development.</li>
              <li>Managed project timelines, coordinated with stakeholders, and ensured successful delivery.</li>
            </ul>
          </li>
  
          <li>
            <div className="underline font-bold">Software Engineer at G.Tech (Jul 2025 – Aug 2025)</div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Built and deployed a YOLOv11-based vision model to detect barrier anomalies (stuck, normal, dropped) with 87% mAP@50.</li>
              <li>Integrated FastAPI and Docker for real-time inference on AWS and set up CI/CD with CircleCI.</li>
            </ul>
          </li>
  
          <li>
            <div className="underline font-bold">Junior Software Engineer at BeMyGuest (Mar 2023 – Dec 2024)</div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Integrated third-party APIs using Laravel and REST/SOAP, automating booking distribution for partners like EPL and Sentosa, boosting efficiency by 75%.</li>
              <li>Used Sentry, ELK stack, and Grafana to troubleshoot API latency, reducing issue resolution time by 25% and improving system responsiveness by 30% across 3+ teams.</li>
            </ul>
          </li>
        </ul>
      ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><span className="underline bold">Programming Languages: </span>Python, JavaScript, PHP, Java, HTML, CSS</li>
        <li><span className="underline bold">Frontend: </span>React.js, Next.js, Vue.js, Tailwind CSS, Bootstrap</li>
        <li><span className="underline bold">Backend: </span>Node.js, Express.js, Django, Laravel</li>
        <li><span className="underline bold">Data Science/ML/AI Tools: </span>Numpy, Pandas, Scikit-learn, TensorFlow, PyTorch, OpenCV, Keras</li>
        <li><span className="underline bold">Database/DevOps: </span>MySQL, PostgreSQL, MongoDB, CI/CD, Git, Docker, Deployment</li>
        <li><span className="underline bold">Monitoring & Logging: </span>ELK Stack, Grafana, Sentry</li>
        <li><span className="underline bold">Other Skills: </span>Leadership, Communication, Collaboration, Stakeholder Management, Troubleshooting, Analytical Thinking, Portfolio Management, Trading, Financial Analysis</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>General Assembly - Software Engineering Immersive</li>
        <li>Singapore University of Technology and Design - Computer Science and Design</li>
        <li>University of London - B.Sc. Computer Science (Machine Learning & AI)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://www.freecodecamp.org/certification/Nihilus888/responsive-web-design" className="relative inline-block hover:text-purple-600 hover:underline transition duration-300 transform hover:-translate-y-1">
            Responsive Web Design
          </a>
        </li>
        <li>
          <a href="https://www.freecodecamp.org/certification/Nihilus888/data-analysis-with-python-v7" className="relative inline-block hover:text-purple-600 hover:underline transition duration-300 transform hover:-translate-y-1">
            Data Analysis with Python
          </a>
        </li>
        <li>
          <a href="https://www.coursera.org/account/accomplishments/verify/DTE9F6SFAXHG" className="relative inline-block hover:text-purple-600 hover:underline transition duration-300 transform hover:-translate-y-1">
            Game Theory
          </a>
        </li>
        <li>
          <a href="https://www.coursera.org/account/accomplishments/verify/VF2F5DYGFN8F" className="relative inline-block hover:text-purple-600 hover:underline transition duration-300 transform hover:-translate-y-1">
            Cryptography I
          </a>
        </li>
        <li>
          <a href="https://www.coursera.org/account/accomplishments/certificate/SHDCXEULE4NJ" className="relative inline-block hover:text-purple-600 hover:underline transition duration-300 transform hover:-translate-y-1">
            Financial Markets
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Extracurricular",
    id: "extracurricular",
    content: (
      <ul className="list-disc pl-2">
        <li className="underline">President of SUTD MarketWatch (2020-2021)</li>
        <p>- Developed relationships with banks and financial institutions to provide finance education to students</p>

        <li className="underline">Investing Note Trading Competition 2022</li>
        <p>- Generated 12% in two weeks and ranked top 3% among 5000 participants trading CFDs on SGX, Hang Seng, and Nasdaq equities</p>

        <li className="underline">Citi Bank-YMCA Entrepreneur Competition</li>
        <p>- Raised over $20,000 for charity and won the Distinguished Entrepreneur Award</p>
      </ul>
    ),
  },
];

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
        <Image src="/images/computer.jpg" width={1000} height={1000} alt="computer image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-lg underline bold decoration-2">About Me</h2>
          <p className="text-base lg:text-lg">
            Welcome! I am Elliott, a passionate and versatile professional with a multifaceted skill set in software engineering, data science, and a wide range of interdisciplinary domains. I thrive on exploring complex problems, building innovative solutions, and continuously learning across various fields.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-2">
            {["experience", "skills", "education", "certifications", "extracurricular"].map((t) => (
              <TabButton key={t} selectTab={() => handleTabChange(t)} active={tab === t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
