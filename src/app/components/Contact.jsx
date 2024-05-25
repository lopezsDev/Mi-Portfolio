"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [emailCount, setEmailCount] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });
    const [sendButtonRef, setSendButtonRef] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (emailCount >= 2) {
            alert("You have reached the maximum number of emails allowed.");
            return;
        }

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const resData = await response.text();

        if (response.status === 200) {
            console.log(resData);
            setEmailSubmitted(true);
            setEmailCount(emailCount + 1);
            sendButtonRef.classList.add("animate-pulse");
            setTimeout(() => {
                sendButtonRef.classList.remove("animate-pulse");
            }, 1000);
            setFormData({ email: "", subject: "", message: "" });
        } else {
            console.error(resData);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10 mb-6">
                <h5 className="text-xl font-bold text-gray-400 my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-gray-200 mb-4 max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say
                    hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/lopezsDev">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/samir-l%C3%B3pez-906437268/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    {emailSubmitted && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                            <span className="block sm:inline">Email sent successfully!</span>
                        </div>
                    )}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-gray-200 block mb-2 text-sm font-medium"
                        >
                            Your email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-gray-900 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="jacob@google.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-gray-200 block text-sm mb-2 font-medium"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-gray-900 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-gray-200 block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-gray-900 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let&apos;s talk about..."
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        ref={(ref) => setSendButtonRef(ref)}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
