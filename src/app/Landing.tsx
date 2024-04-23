"use client";
import React from 'react';
import NavBar from './NavBar';
import Link from 'next/link';

//TODO: maybe try a different way to make this image the background by putting it in the public folder so that it loads properly?
const Landing = (props:{ id :string }) => {
    return(
        <div id={props.id} className="">
            <div className="hero min-h-screen bg-[url('../../assets/images/landing-web.jpg')]" >
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md lg:max-w-full p-10">
                        <h1 className="mb-5 text-3xl lg:text-7xl lg:mb-10 font-bold">Personalized consulting to guide student-athletes to success in college recruitment</h1>
                        <p className="mb-5 lg:mb-10 lg:text-2xl">We've done it before, now lets do it together.</p>
                        <Link href="#consultation"><button className="btn btn-active btn-ghost hover:-translate-y-1 hover:scale-110 duration-300">Book your free consultation now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
