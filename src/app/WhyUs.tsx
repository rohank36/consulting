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
    const [currentImage, setCurrentImage] = useState('/images/trackstar.jpg'); // Default image
    const images = {
        photo1: '/images/trackstar.jpg',
        photo2: '/images/modules/brand-development.jpg',
        // Add more images as needed
    };

    return (
        <div className="flex flex-wrap md:flex-nowrap h-screen">
            <div className="w-full md:w-1/2 p-4 md:p-10 bg-white rounded-lg overflow-auto">
                <h1 className="text-center font-bold text-3xl lg:text-7xl mb-4">Why trust us?</h1>
                <p className="text-center text-sm mb-2 lg:mb-8">Our team is composed of experts who have walked this path and thrived. We understand that it's more than just the game - it's the journey.</p>
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
                <p className="mb-5 text-sm">
                Meet Ibrahim, a beacon of hard work, dedication, and empathy. His college recruitment journey began with challenges, facing minimal interest from colleges. However, his unwavering determination and effort to stand out to college coaches paid off, leading to performances that far exceeded expectations. More than his accomplishments, it’s Ibrahim’s relentless drive and understanding of the recruitment process's highs and lows that make him stand out. Having walked this path himself, Ibrahim is uniquely equipped to guide aspiring college athletes, demonstrating that with the right mindset and support, achieving your dreams is within reach. Let Ibrahim navigate you through the college sports recruitment process, transforming your potential into reality.
                </p>
                <div className="px-6">
                    <ul className="list-none list-inside text-lg space-y-3">
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo1)}
                        >🏃🏿 Princeton Track and Field Captain</li>
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo2)}
                        >🍁 Team Canada Track and Field</li>
                        <li className="hover:scale-110 cursor-pointer duration-300">🏆 3x Princeton School Record Holder</li>
                        <li className="hover:scale-110 cursor-pointer duration-300">🥇 Ivy League Record Holder</li>
                        <li className="hover:scale-110 cursor-pointer duration-300">🎓 Recruited by ___+ schools across the US and Canada</li>
                        <li className="hover:scale-110 cursor-pointer duration-300">📚 Studied Operations Research and Financial Engineering</li>
                        <li className="hover:scale-110 cursor-pointer duration-300">👔 Incoming Analyst @ McKinsey & Company in NYC </li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <img src={currentImage} className="w-full h-full object-cover rounded-lg" alt="Display" />
            </div>
        </div>
    );
};

export default WhyUs;
