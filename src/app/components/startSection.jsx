import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const StartSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                            Hello, I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Samir",
                                1000,
                                "Backend Developer",
                                1000,
                                "Mobile Developer",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg mb-6 lg:text-xl">
                        I&apos;m a seasoned developer with over 15 years of experience in software development,
                        specializing in creating robust and scalable projects using Java. My expertise
                        spans both backend and mobile application development, ensuring seamless integration
                        and high performance across platforms. I have a proven track record of designing and
                        implementing scalable architectures that can handle high traffic and complex data processing needs.
                        <br />
                        Whether you need a sophisticated backend system, a feature-rich mobile application,
                        or a seamless integration of both, I bring a wealth of knowledge and experience to the table.
                        Let&apos;s work together to transform your vision into a powerful, scalable, and efficient
                        solution that meets your unique requirements.
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-gray-500 to-gray-700 hover:bg-gray-800 text-white"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-gray-500 to-gray-700 hover:bg-gray-900 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-gray-900 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-gray-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/samir400.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StartSection;
