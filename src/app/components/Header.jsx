"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed w-full border-b border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-8 py-2">
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                    LOGO
                </Link>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        <li>
                            <Link href="#about" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
