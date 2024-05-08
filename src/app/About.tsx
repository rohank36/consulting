import React from 'react';
import Link from 'next/link';

const About = (props: { id: string }) => {
    const rohanLinkedIn = "https://www.linkedin.com/in/rohankanti/";
    const ibroLinkedIn = "https://www.linkedin.com/in/ibrahim-ayorinde-494b821ab/";
    const ntpNews = "https://bit.ly/2mlDfLV";
    return (
        <div id={props.id} className="bg-white text-black">
            <div className="hero min-h-screen">
                <div className="hero-content flex flex-col lg:flex-row lg:items-center">
                    <div className="hidden lg:block lg:ml-10 space-y-2">
                        <img src="/images/ntp.JPG" className="max-w-lg rounded-lg shadow-2xl" alt="ProspectPrep Co-Founders" />
                        <p className="text-center text-sm">ProspectPrep Co-Founders Ibrahim (left) and Rohan (middle) winning the 2018 YMCA Peace Prize</p>
                    </div>
                    <div className="text-center lg:text-right w-full">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3">Our Mission</h1>
                        <div className='py-6'>
                            <h1 className="text-2xl md:text-3xl mb-5">At ProspectPrep, our mission is clear: <div><b>We're here to pave the way for you to get recruited by your dream school.</b></div></h1>
                            <h2 className="text-lg md:text-xl mb-5">You might wonder, <i>what fuels our drive?</i> The answer is simple - we have always been motivated by a heartfelt commitment to creating positive change in people's lives.</h2>
                            <p className="text-sm md:text-base">
                                Back in 2017, driven by our deep passion for making a difference, we, <Link href={ibroLinkedIn} className="text-blue-500 underline">Ibrahim</Link> and <Link href={rohanLinkedIn} className="text-blue-500 underline">Rohan</Link>, launched the Newcomers Tutoring Program.
                                This initiative in its first year alone supported over 15 refugee children, easing their transition into the Canadian education system through personalized tutoring and peer support.
                                Our efforts were recognized in 2018 when we were honored with the <Link href={ntpNews} className="text-blue-500 underline">YMCA Peace Medal</Link>, celebrating our commitment to community empowerment and our ability to make a significant impact with
                                minimal resources. Now, seven years later, our dedication to helping young adults unlock their potential remains unwavering. There's nothing we find more fulfilling than seeing you
                                pursue and achieve your dreams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
