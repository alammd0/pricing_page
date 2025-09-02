"use client"

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {


    const [isOpen, setIsOpen] = useState(false);

    const navbarData = [
        { "name": "PRICING", "link": "#pricing" },
        { "name": "SLIDER", "link": "#slider" },
        { "name": "BLOG", "link": "#blog" },
        { "name": "Product", "link" : "#product"}
    ] ; 



    return (
        <div className="bg-secondary p-3 text-white">
            <div className="w-11/12 mx-auto flex justify-between items-center relative">

                <div className="text-2xl font-bold font-sans cursor-pointer hover:scale-95">
                    <Link className="text-shadow-sky-100" href="#">Codebase</Link>
                </div>

                <div className="md:flex hidden gap-4 bg-navbar/20 px-6 py-2 rounded">
                    {
                        navbarData.map((item, index) => (
                            <div key={index} className="text-[14px] font-semibold hover:bg-navbar/60 px-5 py-1 rounded capitalize transition-all transform-content duration-75">
                                <Link className=" uppercase" href={`${item.link}`}>
                                    {item.name}
                                </Link>
                            </div>
                        ))
                    }
                </div>

                <div className="bg-navbar/50 px-6 py-2 rounded hidden md:block hover:scale-95 cursor-pointer transition-all transform-fill duration-75">
                    <Link className="text-[14px] font-semibold" href="#">Get Touch</Link>
                </div>

                {/* Here Add menu for Responsive */}
                <div onClick={() => setIsOpen(!isOpen)} className="md:hidden cursor-pointer hover:scale-95 transition-all transform-fill duration-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                {
                    isOpen && (
                        <>
                            <div
                                className="fixed inset-0 bg-black/40 z-40"
                                onClick={() => setIsOpen(false)} // close when clicking outside
                            />

                            <div className="md:hidden block absolute top-full right-0 mt-2 bg-navbar/20 rounded p-4 space-y-2 w-44 shadow-lg z-50">
                            {navbarData.map((item, index) => (
                                <div
                                    key={index}
                                        className="text-[14px] font-semibold hover:bg-secondary px-5 py-2 rounded capitalize transition-all duration-150 cursor-pointer"
                                    >
                                    <Link className="uppercase cursor-pointer" href={item.link} onClick={() => setIsOpen(false)}>
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                            <div className="bg-navbar/50 px-6 py-2 rounded hover:scale-95 cursor-pointer transition-all duration-150">
                                <Link className="text-[14px] text-secondary font-semibold" href="#">
                                    Get Touch
                                </Link>
                            </div>
                        </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}