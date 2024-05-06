'use client';
import React from 'react';
import StudentAthleteCard from './StudentAthleteCard';



const StudentAthlete = (props:{id:string}) => {

    const cards = [
        { title: 'Recruitment Overview', description: 'We provide a comprehensive overview of the college recruitment process, covering academic and athletic requirements in US and Canadian universities, eligibility, scholarships, conduct guidelines, and a tailored recruitment schedule.', numOfSession:3, imgSrc:'/images/modules/recruitment-overview.jpg' , imgSrcAlt:'College Lecture Hall'},
        { title: 'Shortlisting Colleges', description: 'We help athletes select potential colleges based on their academic and athletic goals, preferences, and financial needs. We provide detailed insights into each college\'s athletic programs, academic support, and student life.', numOfSession:5, imgSrc:'/images/modules/shortlisting-colleges.jpg' , imgSrcAlt:'Harvard, Princeton, and Yale crests'},
        { title: 'Brand Development', description: 'We help athletes boost their visibility to college coaches by creating recruitment videos and resumes, and establishing a strong online presence. It guides them in showcasing their athletic and academic achievements as well as personal stories effectively across social media platforms.', numOfSession:4, imgSrc:'/images/modules/brand-development.jpg' , imgSrcAlt:'Two college soccer players in action'},
        { title: 'Coach Communication', description: 'We provide strategies for athletes to effectively communicate with college coaches, including how to craft impactful emails and prepare for campus visits. It emphasizes showcasing academic and athletic achievements as well as program knowledge to enhance recruitment prospects.', numOfSession:2, imgSrc:'/images/modules/coach-communication.jpg' , imgSrcAlt:'Two college football coaches discussing a play'},
        { title: 'Interview Preparation', description: 'We equip athletes with interview preparation strategies for colleges, offering tips on articulating high school experiences, responding to behavioral questions, and engaging effectively with interviewers. It includes practice through mock interviews to help refine communication and presentation skills.', numOfSession:1, imgSrc:'/images/modules/interview-prep.jpg' , imgSrcAlt:'Black and white picture of two people working on their comptuers'},
        { title: 'Application Assistance', description: 'We provide comprehensive support for college applications, guiding athletes through the Common App and individual school-specific essay questions. It includes focused sessions for each school, helping to develop strong, well-thought-out answers and thorough completion from start to finish.', numOfSession:5, imgSrc:'/images/modules/application-assistance.jpg' , imgSrcAlt:'A computer, coffee, and notepad on a table'},
        { title: 'Athletic Evaluation', description: 'We offer a detailed athletic performance evaluation conducted by elite professionals from the NFL, NBA, MLS, Olympics, and NCAA. Athletes receive personalized feedback, highlighting areas for improvement to boost their college recruiting prospects.', numOfSession:2, imgSrc:'/images/modules/athletic-eval.jpg' , imgSrcAlt:'Zoomed in photo of a track athlete in the starting position'},
        { title: 'Post Acceptance Overview', description: 'We guide you on how to navigate your first year in college sports. It includes strategies for balancing athletics and academics, connections with alumni for insights into campus life, advice on socializing, and a checklist for dorm essentials. ', numOfSession:1, imgSrc:'/images/modules/post-acceptance.jpg' , imgSrcAlt:'People throwing their graduation caps on hill with the sunset in the background'},

      ];

    return (
        <div id={props.id}>
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
                <h1 className="font-bold text-2xl lg:text-7xl mt-8 mb-3 text-center">Student Athlete Modules</h1>
                <h1 className="text-sm lg:text-lg text-center">In total we offer <b>8</b> premium modules made up of <b>___+</b> sessions!</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10 p-20">
                    {cards.map((card, index) => (
                        <StudentAthleteCard key={index} title={card.title} description={card.description} numOfSession={card.numOfSession} imgSrc={card.imgSrc} imgSrcAlt={card.imgSrcAlt}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default StudentAthlete;
