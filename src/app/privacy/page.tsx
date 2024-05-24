'use client';

export default function ContactPage(){
    return (
        <div>
            <div className="hero min-h-screen bg-white text-black relative">
                <div className="absolute lg:top-4 lg:left-4">
                    <img src="/images/main2.png" className="h-16 mx-auto md:h-16" />
                </div>
                <div className="hero-content text-center flex justify-center items-center">
                    <div className="md:max-w-md lg:max-w-full flex flex-col space-y-5 text-left">
                        <h1 className="text-4xl font-bold mb-10 mt-40 text-center">Privacy Policy🔐</h1>
                        <p className="">At ProspectPrep Consulting, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you interact with our services.</p>
                        
                        <div className="">
                            <h1 className="font-bold mb-4">1. Information We Collect</h1>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">Personal Information: We may collect personal information such as your name, email address, phone number, school/grade statistics, athletic profiles, athletic videos and any other information you provide to us voluntarily when you engage with our consulting services.</li>
                                <li className="mb-2">Usage Information: We may automatically collect certain information about your device and how you interact with our website or services, including your IP address, browser type, pages visited, and other usage data.</li>
                                <li className="mb-2">Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage patterns.</li>
                            </ul>
                        </div>

                        <div className="">
                            <h1 className="font-bold mb-4">2. How We Use Your Information</h1>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">Provide and Improve Services: We use your personal information to deliver the consulting services you request, tailor our services to your unique needs, and continually improve our offerings.</li>
                                <li className="mb-2">Communication: We may use your contact information to communicate with you about our services, respond to inquiries, and provide updates.</li>
                                <li className="mb-2">Legal Compliance: We may process your information to comply with legal obligations or enforce our terms and policies.</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="font-bold mb-4">3. Information Sharing</h1>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">Third-Party Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services, such as payment processors, academic evaluators, or athletic trainers.</li>
                                <li className="mb-2">Legal Requirements: We may disclose your information in response to a legal request, court order, or other legal process.</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="font-bold mb-4">4. Data Security</h1>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="font-bold mb-4">5. Your Choices and Rights</h1>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">You have the right to access, update, or delete your personal information. You can do so by contacting us using the information provided below.</li>
                                <li className="mb-2">You may opt out of receiving promotional communications from us by following the unsubscribe instructions included in each email.</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="font-bold mb-4">6. Changes to This Policy</h1>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website.</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="font-bold mb-4">7. Contact Us</h1>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at info@prospectprepconsulting.com.</li>
                            </ul>
                        </div>

                        <p>By engaging with our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.</p>

                    </div>
                </div>
            </div>
        </div>
    );
}