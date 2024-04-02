import React from 'react';

const NavBar = () =>{
    return(
        <div>
            <div className="navbar bg-base-300">
                <div className="navbar-start hidden lg:flex">
                    <a className="btn btn-ghost text-xl">Consulting Biz</a>
                </div>
                <div className="flex lg:navbar-center items-center justify-center w-full lg:w-auto">
                    <a className="btn">Book Your Free Consultation Now</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mr-10">
                        <li>
                            <details>
                            <summary>Explore</summary>
                            <ul className="p-2">
                                <li><a>Home</a></li>
                                <li><a>The Problem</a></li>
                                <li><a>Our Service</a></li>
                                <li><a>Why Trust Us?</a></li>
                                <li><a>About</a></li>
                                <li><a>Consultation</a></li>
                            </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;