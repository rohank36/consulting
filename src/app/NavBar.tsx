'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//TODO: MAKE SURE ALL PAGES ARE ACCESSIBLE FROM MENU DROPDOWN

const NavBar = () =>{
    const [isColor, setIsColor] = useState(false);
    const handleScroll = () => {
        const shouldMakeColor = window.scrollY > 60;
        setIsColor(shouldMakeColor);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarClasses = isColor ? 'navbar absolute top-0 z-50 bg-[#f7f7f7] transition-colors duration-300 shadow-2xl rounded-b-lg' : 'navbar absolute top-0 z-50 bg-transparent transition-colors duration-300';
    
    return(
        <div>
            <div className={navbarClasses}>
                <div className="navbar-start hidden lg:flex">
                    <a className="btn btn-ghost text-xl">Consulting Biz</a>
                </div>
                <div className="flex lg:navbar-center items-center justify-center w-full lg:w-auto">
                    <Link href="#consultation"><button className="btn btn-outline hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-transparent hover:text-neutral">Book Your Free Consultation Now</button></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mr-10">
                        <li>
                            <details>
                            <summary>Explore</summary>
                            <ul className="p-2">
                            <li><Link href="#home">Home</Link></li>
                            <li><Link href="#problem">The Problem</Link></li>
                            <li><Link href="#approach">Our Approach</Link></li>
                            <li><Link href="#service">Our Service</Link></li>
                            <li><Link href="#whyus">Why Trust Us?</Link></li>
                            <li><Link href="#about">Our Mission</Link></li>
                            <li><Link href="#faq">FAQ</Link></li>
                            <li><Link href="#consultation">Consultation</Link></li>
                            </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;