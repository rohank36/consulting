'use client';
import React, {useState} from 'react';
import WhyUsStats from './WhyUsStats';
import WhyUsCarousel from './WhyUsCarousel';

const LinkedInIcon = () => (
  <svg enableBackground="new 0 0 32 32" height="32px" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle clipRule="evenodd" cx="16" cy="16" fill="#007BB5" fillRule="evenodd" r="16"/>
      <g>
        <rect fill="#FFFFFF" height="14" width="4" x="7" y="11"/>
        <path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"/>
        <circle cx="9" cy="8" fill="#FFFFFF" r="2"/>
      </g>
    </g>
  </svg>
);

//TODO: make this page mobile friendly
const WhyUs = () => {
    const [currentImage, setCurrentImage] = useState('/images/trackstar.jpg');
    const images = {
        photo1: '/images/trackstar.jpg',
        photo2: '/images/modules/brand-development.jpg',
    }; 
    return (
        <div className="flex flex-wrap md:flex-nowrap min-h-screen">
            <div className="w-full md:w-1/2 p-4 md:p-10 bg-white rounded-lg">
                <h1 className="text-center font-bold text-3xl lg:text-7xl mt-5 mb-4">Why trust us?</h1>
                <p className="text-center mb-10 lg:mb-16">We are both experts blah blah blah.....</p>
                <div className="flex items-center space-x-4 mb-2">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile" />
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold">Ibrahim Ayorinde</h1>
                    <button className="transition-transform duration-500 hover:scale-125">
                        <LinkedInIcon />
                    </button>
                </div>
                <p className="py-6">Ibrahim is a dedicated blah blah blah blah. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <div className="px-6">
                    <ul className="list-none list-inside text-xl space-y-6">
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo1)}
                        >🏃🏿 Princeton Track and Field Captain</li>
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo2)}
                        >🍁 Team Canada Track and Field</li>
                        <li className="hover:scale-110 cursor-pointer duration-300">🏆 3x Princeton School Record Holder</li>
                        <li className="hover:scale-110 cursor-pointer duration-300">🥇 Ivy League Record Holder</li>
                        <li className="hover:scale-110 cursor-pointer duration-300">📚 Studied Operations Research and Financial Engineering</li>
                    </ul>
                </div>
                <div className='text-center mt-20'>
                    <h1 className="text-2xl font-bold">Recruited By</h1>
                </div>
            </div>
            <div className="w-1/2 min-h-screen">
                <img src={currentImage} className="w-full h-full object-cover rounded-lg" alt="Various images" />
            </div>
        </div>
    );
};

export default WhyUs;
