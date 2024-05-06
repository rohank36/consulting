'use client';
import React from 'react';
const StudentAthleteCard = (props: {title:string, description: string, numOfSession: number, imgSrc: string, imgSrcAlt: string}) => {
    return (
        <div className="max-w-md rounded-lg hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col">
            <div className="relative">
                <img className="w-full h-48 rounded-lg object-cover" src={props.imgSrc} alt={props.imgSrcAlt} />
            </div>
            <div className='flex flex-col justify-between flex-grow px-1 py-1'>
                <div>
                    <div className="font-bold text-md">{props.title}</div>
                    <p className="text-slate-500 text-sm line-clamp-8">
                        {props.description}
                    </p>
                </div>
                <div className='text-sm mt-2 self-start'><b>{props.numOfSession}</b> sessions</div>
            </div>
        </div>
    );
}

export default StudentAthleteCard;

