import React from 'react'
import GithubIcon from "public/github-mark.svg"
import LinkedInIcon from "public/icons8-linkedin.svg"
import Link from "next/link";
import Image from "next/image";

const EmailsSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I'm currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/Nihilus888">
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link href="https://www.linkedin.com/in/elliott-tay-computing/">
                    <Image src={LinkedInIcon} alt="LinkedIn Icon"/>
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col gap-4">
                <label htmlFor="email" type="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                <input type="email" id="email" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" required placeholder="jacob@google.com"/>
            </form>
        </div>
    </section>
  )
}

export default EmailsSection