import React from 'react';

const LinkedInIcon = () => (
  <svg enableBackground="new 0 0 32 32" height="32px" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle clipRule="evenodd" cx="16" cy="16" fill="#007BB5" fillRule="evenodd" r="16"/>
      <g>
        <rect fill="#FFFFFF" height="14" width="4" x="7" y="11"/>
        <path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"/>
        <circle cx="9" cy="8" fill="#FFFFFF" r="2"/>
      </g>
    </g>
  </svg>
);

//TODO: make this page mobile friendly
const WhyUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 flex flex-col">
                <h1 className="text-center font-bold mx-auto text-3xl lg:text-7xl mt-5 mb-4 lg:mt-12">Why trust us?</h1>
                <h1 className="mb-10 lg:mb-16">We are both experts blah blabh blab.....</h1>
                <div className="hero-content flex-col lg:flex-row mb-10 lg:mb-36">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" alt="Box Office"/>
                    <div>
                        <div className="flex items-center space-x-4"> {/* Flex container for side-by-side layout */}
                            <h1 className="text-5xl font-bold">Ibrahim Ayorinde</h1>
                            <button className="transition-transform duration-500 hover:scale-125">
                                <LinkedInIcon />
                            </button>
                        </div>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <div className="stat-title">Total Likes</div>
                                <div className="stat-value text-primary">25.6K</div>
                                <div className="stat-desc">21% more than last month</div>
                            </div>
                            
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div className="stat-title">Page Views</div>
                                <div className="stat-value text-secondary">2.6M</div>
                                <div className="stat-desc">21% more than last month</div>
                            </div>
                            
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                </div>
                                <div className="stat-value">86%</div>
                                <div className="stat-title">Tasks done</div>
                                <div className="stat-desc text-secondary">31 tasks remaining</div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                </div>
                                <div className="stat-value">86%</div>
                                <div className="stat-title">Tasks done</div>
                                <div className="stat-desc text-secondary">31 tasks remaining</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse mb-20">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" alt="Box Office"/>
                    <div>
                        <div className="flex items-center space-x-4"> {/* Flex container for side-by-side layout */}
                            <h1 className="text-5xl font-bold">Rohan Kanti</h1>
                            <button className="transition-transform duration-500 hover:scale-125">
                                <LinkedInIcon />
                            </button>
                        </div>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <div className="stat-title">Total Likes</div>
                                <div className="stat-value text-primary">25.6K</div>
                                <div className="stat-desc">21% more than last month</div>
                            </div>
                            
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div className="stat-title">Page Views</div>
                                <div className="stat-value text-secondary">2.6M</div>
                                <div className="stat-desc">21% more than last month</div>
                            </div>
                            
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                </div>
                                <div className="stat-value">86%</div>
                                <div className="stat-title">Tasks done</div>
                                <div className="stat-desc text-secondary">31 tasks remaining</div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                </div>
                                <div className="stat-value">86%</div>
                                <div className="stat-title">Tasks done</div>
                                <div className="stat-desc text-secondary">31 tasks remaining</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
