import React from 'react';

const Consultation = () => {
    return(
        <div>
            <div className="hero h-3/4 bg-base-200">
                <div className="hero-content text-center p-20">
                    <div className="lg:w-full">
                        <h1 className="lg:text-6xl text-4xl font-bold">Book Your Free Consultation Now</h1>
                        <p className="py-6">
                            Schedule your free 30 minute consultation today and we'll be in contact with you! Dive into a personalized session where we explore your unique aspirations and challenges to tailor a customized experience and strategy based on your needs.
                            We're here to guide you every step of the way. Let's navigate this journey together to ensure that you are always one step ahead.
                        </p>
                        <button className="btn btn-active btn-ghost hover:-translate-y-1 hover:scale-110 duration-300">Book Consultation</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Consultation;