import React from 'react';
import StudentAthleteCard from './StudentAthleteCard';

const stage1Title = "askdfjaksldfjklasdf";
const stage1Description = "asdjkfasdjklfajskldf";


const StudentAthlete = () => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center mt-10">

            <div className='w-3/4'>
                <h1 className="font-bold text-2xl lg:text-4xl mb-4 text-center">Student Athlete Stages</h1>
                <h1 className="text-md lg:text-lg text-center mb-8">Click on any stage to learn more</h1>
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

            </div>
        </div>
    );
};
export default StudentAthlete;
/*
<div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="font-bold text-2xl lg:text-4xl mb-8">Student Athlete Stages</h1>
    <div className="w-3/4 h-80 lg:min-h-screen carousel rounded-box mb-28">
        <div className="carousel-item w-full bg-neutral">
            <p>hello</p>
        </div> 
        <div className="carousel-item w-full bg-primary">
            <p>hello</p>
        </div> 
    </div>
</div>
*/