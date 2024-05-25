import React from "react";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white mt-8 z-10">
            <div className="container p-12 flex justify-between">
                <span>
                    <Image
                        src="/images/logoprincipal.svg"
                        width={60}
                        height={60}
                        alt="Developer Image"
                    />
                </span>
                <p className="text-slate-600">All rights reserved.</p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/lopezsDev">
                        <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/samir-l%C3%B3pez-906437268/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-8 h-8" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

