'use client';
import Link from 'next/link';
import React from 'react';

const Consultation = (props:{id:string}) => {
    return(
        <div id={props.id}>
            <div className="hero h-3/4 bg-white text-black">
                <div className="hero-content text-center p-20">
                    <div className="lg:w-full">
                        <h1 className="lg:text-6xl text-4xl font-bold">Book Your Free Consultation Now</h1>
                        <p className="py-6">
                            Schedule your free 30 minute consultation today and we'll be in contact with you! Dive into a personalized session where we explore your unique aspirations and challenges to tailor a customized experience and strategy based on your needs.
                            We're here to guide you every step of the way. Let's navigate this journey together to ensure that you are always one step ahead.
                        </p>
                        <Link href="https://calendly.com/info-jiue/30min"><button className="btn btn-large btn-outline mt-5 border-black text-black hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-transparent hover:text-black">Book Consultation</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Consultation;