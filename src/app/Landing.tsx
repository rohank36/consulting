import React from 'react';
import NavBar from './NavBar';

const Landing = () => {
    return(
        <div className="">
            <div className="hero min-h-screen bg-[url('../../assets/images/landing-web.jpg')]" >
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md lg:max-w-full p-10">
                        <h1 className="mb-5 text-3xl lg:text-7xl lg:mb-10 font-bold">Personalized consulting to guide student-athletes and national servicemen to success</h1>
                        <p className="mb-5 lg:mb-10 lg:text-2xl">We've done it before, now lets do it together.</p>
                        <button className="btn btn-active btn-ghost hover:-translate-y-1 hover:scale-110 duration-300">Book your free consultation now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
