'use client';
import { useRouter } from 'next/navigation';

const Footer = () =>{
    const router = useRouter()
    return(
        <div>
            <footer className="footer footer-center p-10 bg-gray-100 text-black">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover" type="button" onClick={() => router.push('/contact')}>Contact Us</a>
                    <a className="link link-hover" type="button" onClick={() => router.push('/privacy')}>Privacy Policy</a>
                </nav> 
                <nav>
                    <img src="/images/main2.png" className='h-16 rounded-lg'/>
                </nav>
                <div className="space-y-3 text-xs">
                    <aside>
                        <p>Suite 405-277 Lakeshore Road East</p>
                    </aside>
                    <aside>
                        <p>Copyright © 2024 - All right reserved by ProspectPrep Consulting Ltd</p>
                    </aside>
                </div>
            </footer>
        </div>
    );
}

export default Footer;