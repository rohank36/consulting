'use client';
import React, { useState, useEffect } from 'react';
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
                    <a className="btn btn-active btn-ghost hover:scale-110 duration-300">Book Your Free Consultation Now</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mr-10">
                        <li>
                            <details>
                            <summary>Explore</summary>
                            <ul className="p-2">
                                <li><a>Home</a></li>
                                <li><a>The Problem</a></li>
                                <li><a>Our Approach</a></li>
                                <li><a>Our Service</a></li>
                                <li><a>Why Trust Us?</a></li>
                                <li><a>Our Mission</a></li>
                                <li><a>FAQ</a></li>
                                <li><a>Consultation</a></li>
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