import React from 'react';
import StudentAthleteCard from './StudentAthleteCard';


//TODO: maybe switch to use "card" dasiy ui then leverage the design principle the guy in the tiktok talked about

const StudentAthlete = () => {

    const cards = [
        { title: 'Recruitment Overview', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi', numOfSession:3, imgSrc:'/images/modules/recruitment-overview.jpg' , imgSrcAlt:'College Lecture Hall'},
        // Add as many as you need
      ];

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                <h1 className="font-bold text-2xl lg:text-7xl mt-8 mb-3 text-center">Student Athlete Modules</h1>
                <h1 className="text-md lg:text-lg text-center mb-3">In total we offer <b>10+</b> premium modules made up of <b>___+</b> sessions!</h1>
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
/*
<div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        Free Consultation
                    </div>
                    <div className="collapse-content"> 
                        <StudentAthleteCard title={stage1Title} description={stage1Description} />
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl font-medium">
                        Recruitment Overview
                    </div>
                    <div className="collapse-content"> 
                        <StudentAthleteCard title={stage1Title} description={stage1Description} />
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl font-medium">
                        Shorlisting Colleges
                    </div>
                    <div className="collapse-content"> 
                        <StudentAthleteCard title={stage1Title} description={stage1Description} />  
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl font-medium">
                       Brand Development
                    </div>
                    <div className="collapse-content"> 
                        <StudentAthleteCard title={stage1Title} description={stage1Description} />  
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl font-medium">
                        Coach Communication 
                    </div>
                    <div className="collapse-content"> 
                        <StudentAthleteCard title={stage1Title} description={stage1Description} />  
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl font-medium">
                        Application Assistance
                    </div>
                    <div className="collapse-content"> 
                        <StudentAthleteCard title={stage1Title} description={stage1Description} />  
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl font-medium">
                        Comprehensive Athletic Performance Evaluation 
                    </div>
                    <div className="collapse-content"> 
                        <StudentAthleteCard title={stage1Title} description={stage1Description} />  
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-10">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl font-medium">
                        Post Acceptance NCAA Overview
                    </div>
                    <div className="collapse-content"> 
                        <StudentAthleteCard title={stage1Title} description={stage1Description} />  
                    </div>
                </div>
*/