'use client';

export default function ContactPage(){
    return (
        <div>
            <div className="hero min-h-screen bg-white text-black relative">
                <div className="flex flex-col">
                    <div className="absolute top-4 lg:left-4">
                        <img src="/images/main3.png" className="h-16 mx-auto md:h-16" />
                    </div>
                    <div className="hero-content text-center flex justify-center items-center">
                        <div className="max-w-md">
                            <h1 className="text-4xl font-bold mb-10">Get in Touch 📩📲</h1>
                            <div className="text-1xl space-y-5">
                                <p className="hover:underline">info@prospectprepconsulting.com</p>
                                <p className="hover:underline">+1 289-795-6169 or +1 832-382-7737</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}