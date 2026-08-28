import React from 'react';
import Logo from '../../Components/Home/Logo/Logo.jsx';
import { Link, NavLink } from 'react-router';
import { BsArrowUpRight, BsCircleFill, BsFillArrowUpRightCircleFill } from "react-icons/bs";
import UseAuth from '../../Hooks/UseAuth.jsx';
import { AuthContext } from '../../AuthProvider/AuthProvider.jsx';


const Navbar = () => {
    const { user, logOut } = UseAuth(AuthContext);
    const handleLogout = () => {
        logOut()
    }
    const list = <>
        <NavLink to="">Services</NavLink>
        <NavLink to="/coverage">Coverage</NavLink>
        <NavLink to="/login">About Us</NavLink>
        <NavLink to="">Pricing</NavLink>
        <NavLink to="">Blog</NavLink>
        <NavLink to="">Contact</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm md:my-10 ">
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

                    <Logo></Logo>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                       {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user ? <Link to='/login' className='btn mr-2'>Sign In</Link>
                            :
                            <button onClick={handleLogout} className='btn mr-2'>LogOut</button>
                    }
                    {/* <Link to='/login' className='btn mr-2'>Sign In</Link> */}
                    <Link to='/rider' className='btn btn-primary text-black'>Be a rider</Link>
                    {/* <BsFillArrowUpRightCircleFill className='w-10 h-10 text-primary' /> */}
                    <div className="relative hidden w-[40px] h-[40px] md:block">
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