import React from 'react';
import FAQCard from './FAQCard';


const d1 = "Start your journey now by booking a free 30 minute consultation call with us - we'll handle the rest!";
const d2 = "No worries! Schedule a consultation and we'll create a personalized plan just for you.";
const d3 = "One session will typically last between 1 to 1.5 hours.";
const d4 = "_______________idk bruv";

const FAQ = (props:{id:string}) => {
    return (
        <div id={props.id} className="w-full flex justify-center items-center mt-10 mb-10">

            <div className='w-3/4'>
                <h1 className="font-bold text-2xl lg:text-4xl mb-10 text-center">Frequently Asked Questions</h1>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" defaultChecked /> 
                    <div className="collapse-title text-xl">
                        How do I get started?
                    </div>
                    <div className="collapse-content"> 
                        <FAQCard  description={d1} />
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl">
                        What if I only want to do module x, y and z?
                    </div>
                    <div className="collapse-content"> 
                        <FAQCard  description={d2} />
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl">
                        How long does one session typically last?
                    </div>
                    <div className="collapse-content"> 
                        <FAQCard  description={d3} />  
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl">
                        When should I start preparing for college recruitment?
                    </div>
                    <div className="collapse-content"> 
                        <FAQCard  description={d4} />  
                    </div>
                </div>

            </div>
        </div>
    );

}
export default FAQ;