'use client';
import React from 'react';
import StudentAthleteCard from './StudentAthleteCard';


//TODO: maybe switch to use "card" dasiy ui then leverage the design principle the guy in the tiktok talked about

const StudentAthlete = (props:{id:string}) => {

    const cards = [
        { title: 'Recruitment Overview', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi', numOfSession:3, imgSrc:'/images/modules/recruitment-overview.jpg' , imgSrcAlt:'College Lecture Hall'},
        { title: 'Shortlisting Colleges', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi', numOfSession:5, imgSrc:'/images/modules/shortlisting-colleges.jpg' , imgSrcAlt:'Harvard, Princeton, and Yale crests'},
        { title: 'Brand Development', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi', numOfSession:4, imgSrc:'/images/modules/brand-development.jpg' , imgSrcAlt:'Two college soccer players in action'},
        { title: 'Coach Communication', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi', numOfSession:2, imgSrc:'/images/modules/coach-communication.jpg' , imgSrcAlt:'Two college football coaches discussing a play'},
        { title: 'Application Assistance', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi', numOfSession:5, imgSrc:'/images/modules/application-assistance.jpg' , imgSrcAlt:'A computer, coffee, and notepad on a table'},
        { title: 'Interview Preparation', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi', numOfSession:1, imgSrc:'/images/modules/interview-prep.jpg' , imgSrcAlt:'Black and white picture of two people working on their comptuers'},
        { title: 'Athletic Evaluation', description: 'Athletic performance evaluation by elite athletes from the NFL, NBA, MLS, Olympics, and NCAA.', numOfSession:2, imgSrc:'/images/modules/athletic-eval.jpg' , imgSrcAlt:'Zoomed in photo of a track athlete in the starting position'},
        { title: 'Post Acceptance Overview', description: 'Provident cupiditate voluptatem et in.', numOfSession:2, imgSrc:'/images/modules/post-acceptance.jpg' , imgSrcAlt:'People throwing their graduation caps on hill with the sunset in the background'},
        // Add as many as you need
      ];

    return (
        <div id={props.id}>
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
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
