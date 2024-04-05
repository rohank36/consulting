import React from 'react';
//test commment for git
const StudentAthleteCard = (props: {title:string, description: string, numOfSession: number, imgSrc: string, imgSrcAlt: string}) => {
    return (
        <div className="max-w-md rounded-lg hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="relative">
                <img className="w-full h-full rounded-lg object-cover" src={props.imgSrc} alt={props.imgSrcAlt} />
            </div>
            <div className='px-1 py-1'>
                <div className="font-bold text-md">{props.title}</div>
                <p className="text-gray-800 text-sm">
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default StudentAthleteCard;

/*
return(
        <div className="card w-72 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body bg-transparent">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
*/