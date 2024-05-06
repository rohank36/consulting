'use client'
import React, { useState }from 'react';
import NationalService from './NationalService';
import StudentAthlete from './StudentAthlete';

const Service = () => { 
    const [selectedOption, setSelectedOption] = useState(false);
    const [nationalService, setNationalService] = useState(false);
    const [studentAthlete, setStudentAthlete] = useState(false);

    const clickNationalService = () => {
        setSelectedOption(true);
        setNationalService(true);
    }
    const clickStudentAthlete = () => {
        setSelectedOption(true);
        setStudentAthlete(true);
    }
  
    if(!selectedOption){
        return (
            <div className="text-center mt-10"> 
                <h1 className="lg:text-5xl text-3xl font-bold mx-auto">Choose your path</h1>
                <div className="flex flex-col w-full min-h-screen lg:flex-row p-20 lg:p-32"> 
                    <button className="flex-1 grid card bg-base-300 rounded-box place-items-center transition-transform duration-500 hover:scale-105" onClick={clickStudentAthlete}> 
                        Student Athlete
                    </button>
                    <div className="divider lg:divider-horizontal p-5 lg:p-10">OR</div> 
                    <button className="flex-1 grid card bg-base-300 rounded-box place-items-center transition-transform duration-500 hover:scale-105" onClick={clickNationalService}> 
                        National Service
                    </button>
                </div>
            </div>
        );
    }else if(selectedOption && nationalService){
        return <NationalService/>
    }else if(selectedOption && studentAthlete){
    }
}

export default Service;
