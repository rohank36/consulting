import React from 'react';
//<img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
//to add photo

const Problem = () =>{
    return(
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                    <h1 className="lg:text-5xl text-3xl font-bold">Struggling to navigate collegiate sports recruitment or National Service?</h1>
                    <h1 className="lg:text-5xl text-3xl mt-5">We've been there, we get it.</h1>
                    <p className="lg:text-lg text-md py-6">With our expert guidance, we'll simplify your journey, helping you navigate and overcome hurdles together.</p>
                    <button className="btn btn-primary">How we help you</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Problem;