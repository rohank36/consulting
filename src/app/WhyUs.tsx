'use client';
import React, {useState} from 'react';
import Link from 'next/link'
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


const WhyUs = (props:{id:string}) => {
    const ibroLinkedIn="https://www.linkedin.com/in/ibrahim-ayorinde-494b821ab/";
    const [currentImage, setCurrentImage] = useState('/images/ibro/princeton-record-holder.JPG'); // Default image
    const images = {
        photo1: '/images/ibro/princeton-record-holder.JPG',
        photo2: '/images/ibro/team-canada.JPG',
        photo3: '/images/ibro/princeton-record-holder.JPG',
        photo4: '/images/ibro/ivy-league-record.JPG',
        photo5: '/images/ibro/princeton-record-holder.JPG',
        photo6: '/images/ibro/grad.jpg',
        photo7: '/images/ibro/princeton-record-holder.JPG'
        // Add more images as needed
    };

    return (
        <div id={props.id} className="flex flex-wrap md:flex-nowrap h-screen">
            <div className="w-full md:w-1/2 p-4 md:p-10 bg-white overflow-auto text-black">
                <h1 className="text-center font-bold text-3xl lg:text-7xl mb-4">Why trust us?</h1>
                <p className="text-center text-sm mb-2 lg:mb-8">Our team is composed of experts who have walked this path and thrived.</p>
                <div className="flex items-center space-x-4 mb-2">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src="/images/ibro/ibro-headshot.JPG" alt="Profile" />
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold">Ibrahim Ayorinde</h1>
                    <button className="transition-transform duration-500 hover:scale-125">
                        <Link href={ibroLinkedIn}><LinkedInIcon /></Link>
                    </button>
                </div>
                <p className="mb-5 text-sm">
                    Meet Ibrahim, Consulting Biz’s lead mentor. Born in the U.S. and raised in Oakville, Canada, Ibrahim discovered his passion for track at a young age. 
                    Throughout high school at Appleby College, he excelled in multiple competitions winning meets like ____,_____, and ______. Ibrahim overcame college recruitment 
                    obstacles by navigating the process himself, securing offers from prestigious universities like Princeton, Columbia, and the University of Toronto. At Princeton, 
                    he not only pursued an Engineering degree but also broke records in the Ivy League, eventually becoming the captain of the Princeton track and field team. With his 
                    extensive experience and achievements, Ibrahim is uniquely equipped to guide aspiring college athletes through the recruitment journey, helping them turn their potential 
                    into reality. Let Ibrahim lead you in achieving your collegiate athletic dreams.
                </p>
                <div className="px-6">
                    <ul className="list-none list-inside text-lg space-y-3">
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo1)}
                        >🏃🏿 Princeton Track and Field Captain</li>
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo2)}
                        >🍁 Team Canada Track and Field</li>
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo3)}
                        >🏆 3x Princeton School Record Holder</li>
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo4)}
                        >🥇 Ivy League Record Holder</li>
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo5)}
                        >🎓 Recruited by ___+ schools across the US and Canada</li>
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo6)}
                        >📚 Studied Operations Research and Financial Engineering</li>
                        <li className="hover:scale-110 cursor-pointer duration-300"
                            onClick={() => setCurrentImage(images.photo7)}
                        >👔 Incoming Analyst @ McKinsey & Company in NYC </li>
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
