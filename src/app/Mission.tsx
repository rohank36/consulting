import React from 'react';
import Link from 'next/link';

const Approach = (props: { id: string }) => {
    return (
        <div id={props.id}>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content text-center text-black">
                    <div className="max-w-md lg:max-w-4xl mx-auto p-4 lg:">
                        <h1 className="text-3xl lg:text-7xl font-bold">Our Mission</h1>
                        <p className="py-6 text-sm lg:text-lg leading-relaxed mb-10 lg:mb-20">
                            To empower high school student athletes to achieve their academic and athletic goals by personalizing
                            the college recruitment process through dedicated guidance, honest communication, and trusted relationships.
                        </p>
                        <h1 className="text-3xl lg:text-7xl font-bold">Our Vision</h1>
                        <p className="py-6 text-sm lg:text-lg leading-relaxed">
                            To create a community where dedicated high school student athletes have a better opportunity to reach their
                            collegiate goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approach;
