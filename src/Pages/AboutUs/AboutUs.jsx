import React from 'react';
import Mytabs from '../../Components/Mytabs/Mytabs.jsx';

const AboutUs = () => {
    return (
        <div className='px-20'>
            <h1 className='font-2xl font-bold text-secondary'>About Us</h1>
            <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br></br> packages to business shipments — we deliver on time, every time.</p>
            <hr className='text-black my-10' />
            <div>
                <Mytabs></Mytabs>
            </div>

        </div>
    );
};

export default AboutUs;