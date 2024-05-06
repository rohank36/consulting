import React from 'react';
import Link from 'next/link';

const Approach = (props: { id: string }) => {
    return (
        <div id={props.id}>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content text-center text-black">
                    <div className="max-w-md lg:max-w-4xl mx-auto p-4">
                        <h1 className="text-3xl lg:text-7xl font-bold mb-4 lg:mb-10">Our Approach</h1>
                        <p className="py-6 mb-4 lg:mb-10 text-sm lg:text-lg leading-relaxed">
                            Our approach is driven by a deep commitment to your success. From the outset, our guidance is meticulously tailored to your unique needs and aspirations. 
                            Each of our premium modules is customized to align with your current situation and future goals. With Co-Founder and Lead Mentor Ibrahim at the 
                            helm—someone who has personally navigated the path you're on—we possess the firsthand experience and understanding necessary to guide you effectively.
                        </p>
                        <button className="btn btn-outline cursor-auto black-border text-black hover:bg-transparent hover:text-black">Check out our modules below</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approach;
