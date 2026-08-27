import React from 'react';
import Logo from '../../Components/Home/Logo/Logo.jsx';
import { NavLink } from 'react-router';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutube, FaYoutubeSquare } from "react-icons/fa";
const Footer = () => {
    const list = <>
        <NavLink to="">Services</NavLink>
        <NavLink to="Coverage">Coverage</NavLink>
        <NavLink to="">About Us</NavLink>
        <NavLink to="">Pricing</NavLink>
        <NavLink to="">Blog</NavLink>
        <NavLink to="">Contact</NavLink>
    </>
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black text-accent p-10">
            <aside>
                <Logo></Logo>
                <p className="font-semibold text-accent mt-3">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to
                    <br />
                    business shipments — we deliver on time, every time.
                </p>
            </aside>
             <nav className='flex flex-col md:flex-row gap-5 font-semibold text-accent text-xl'>
                {list}                
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-6">
                    <a>
                        <FaLinkedin className='w-8 h-8 text-[#2489BE]' />
                
                    </a>
                    <a>
                        <FaFacebookSquare className='w-8 h-8 text-[#FFFFF]' />
                    </a>
                    <a>
                        <FaTwitterSquare className='w-8 h-8 text-[#00B2FF]' />
                    </a>
                    <a>
                        <FaYoutubeSquare className='w-8 h-8 text-[#B71C1C]' />
                    </a>
                       
                </div>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;