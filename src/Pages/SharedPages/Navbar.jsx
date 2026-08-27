import React from 'react';
import Logo from '../../Components/Home/Logo/Logo.jsx';
import { NavLink } from 'react-router';
import { BsArrowUpRight, BsCircleFill, BsFillArrowUpRightCircleFill } from "react-icons/bs";


const Navbar = () => {
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
            <div className="navbar bg-base-100 shadow-sm my-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {list}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><Logo></Logo></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                       {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='btn mr-2'>Sign In</button>
                    <button className='btn'>Be a rider</button>
                    {/* <BsFillArrowUpRightCircleFill className='w-10 h-10 text-primary' /> */}
                    <div className="relative w-[40px] h-[40px]">
                        <BsCircleFill
                            size={40}
                            className="absolute text-black"
                        />

                        <BsArrowUpRight
                            size={20}
                            className="absolute top-[10px] left-[10px] text-primary"
                        />
                    </div>
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;