import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/SharedPages/Footer.jsx';
import Navbar from '../Pages/SharedPages/Navbar.jsx';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar> </Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;