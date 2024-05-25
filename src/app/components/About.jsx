"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/devman.jpg"
                    width={700}
                    height={700}
                    alt="Developer Image"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I&apos;m a seasoned backend developer specializing in architecting
                        scalable solutions. With expertise in Java, Spring Boot, and
                        database design, I excel in building high-performance APIs and
                        microservices. I&apos;m committed to mentoring teams, staying abreast of
                        industry trends, and delivering reliable, maintainable code to drive
                        project success.
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Skills</h3>
                            <ul className="list-disc pl-4">
                                <li>Java</li>
                                <li>Spring Framework</li>
                                <li>Spring Boot</li>
                                <li>Microservicios</li>
                                <li>Testing</li>
                                <li>DevOps</li>
                                <li>APIs RESTful</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Education</h3>
                            <ul className="list-disc pl-4">
                                <li>Enterprise IT</li>
                                <li>University of Costa Rica, Golfito.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
                            <ul className="list-disc pl-4">
                                <li>Spring Professional Certification</li>
                                <li>AWS Certified Solutions Architect</li>
                                <li>Docker Certified Associate</li>
                                <li>Certified Information Systems Security Professional</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
