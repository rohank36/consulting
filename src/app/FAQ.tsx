import React from 'react';
import FAQCard from './FAQCard';

const stage1Title = "askdfjaksldfjklasdf";
const stage1Description = "asdjkfasdjklfajskldf";
const FAQ = () => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center mt-10">

            <div className='w-3/4'>
                <h1 className="font-bold text-2xl lg:text-4xl mb-10 text-center">Frequently Asked Questions</h1>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        How do I get started?
                    </div>
                    <div className="collapse-content"> 
                        <FAQCard title={stage1Title} description={stage1Description} />
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl font-medium">
                        What if I only want to do module x and y?
                    </div>
                    <div className="collapse-content"> 
                        <FAQCard title={stage1Title} description={stage1Description} />
                    </div>
                </div>
                <div className="collapse bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-1" /> 
                    <div className="collapse-title text-xl font-medium">
                        How long does a session typically last?
                    </div>
                    <div className="collapse-content"> 
                        <FAQCard title={stage1Title} description={stage1Description} />  
                    </div>
                </div>

            </div>
        </div>
    );

}
export default FAQ;