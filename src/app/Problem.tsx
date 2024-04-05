import React from 'react';

const Problem = () =>{
    return(
        <div>
            <div className="hero min-h-screen bg-[url('../../assets/images/problem-statement-web.jpg')] ">
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content flex-col lg:flex-row-reverse text-neutral-content">
                    <div>
                    <h1 className="lg:text-7xl text-3xl font-bold">Struggling to navigate collegiate sports recruitment?</h1>
                    <h1 className="lg:text-6xl text-3xl mt-5">We've been there, we get it.</h1>
                    <p className="lg:text-lg text-md py-6">With our expert guidance, we'll simplify your journey, helping you navigate and overcome hurdles together.</p>
                    <button className="btn bg-transparent text-white hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-transparent">How we help you</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Problem;