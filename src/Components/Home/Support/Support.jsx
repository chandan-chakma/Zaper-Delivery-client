import React from 'react';
import liveTracking from '../../../assets/live-tracking.png'
import marchantImg from '../../../assets/be-a-merchant-bg.png';
import tracking from '../../../assets/location-merchant.png'
const Support = () => {
    return (
        <div>
            <div className='my-7 flex flex-col gap-10'>
                <div className="hero max-h-screen bg-[#FFFFFF] rounded-2xl">
                    <div className="hero-content w-full justify-start flex-col lg:flex-row">
                        <img
                            alt="Tailwind CSS hero component"
                            src={liveTracking}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div className='hidden md:block border-r-2 h-40 border-dashed mx-6 border-[#03373D]'></div>
                        <div>
                            <h1 className="text-2xl font-bold text-secondary mb-4">Live Parcel Tracking</h1>
                            <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                        </div>
                    </div>
                </div>
                <div className="hero max-h-screen bg-[#FFFFFF] rounded-2xl">
                    <div className="hero-content w-full justify-start flex-col lg:flex-row ">
                        <img
                            alt="Tailwind CSS hero component"
                            src={liveTracking}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div className='hidden md:block border-r-2 h-40 border-dashed mx-6 border-[#03373D]'></div>
                        <div>
                            <h1 className="text-2xl font-bold text-secondary mb-4">100% Safe Delivery</h1>
                            <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                        </div>
                    </div>
                </div>
                <div className="hero max-h-screen bg-[#FFFFFF] rounded-2xl">
                    <div className="hero-content w-full justify-start flex-col lg:flex-row ">
                        <img
                            alt="Tailwind CSS hero component"
                            src={liveTracking}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div className='hidden md:block border-r-2 h-40 border-dashed mx-6 border-[#03373D]'></div>
                        <div>
                            <h1 className="text-2xl font-bold text-secondary mb-4">24/7 Call Center Support</h1>
                            <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative overflow-hidden rounded-2xl px-6 py-10 md:px-12 lg:px-16" style={{
                backgroundColor: "var(--color-secondary)",
                backgroundImage: `url(${marchantImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
                backgroundPosition: 'tcenter',
                
            }}>

                {/* Decorative background
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/100 to-secondary"></div> */}

                <div className="relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:justify-between">

                    {/* Left content */}
                    <div className="max-w-xl text-center lg:text-left">

                        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                            Merchant and Customer Satisfaction
                            <br className="hidden md:block" />
                            is Our First Priority
                        </h2>

                        <p className="mt-5 max-w-lg text-sm leading-6 text-white/80 md:text-base">
                            We offer the lowest delivery charge with the highest
                            value along with 100% safety of your product. Pathao
                            courier delivers your parcels in every corner of
                            Bangladesh right on time.
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">

                            <button className="btn rounded-full border-none bg-[#D7F36A] px-7 text-[#123F43] hover:bg-[#c8e75b]">
                                Become a Merchant
                            </button>

                            <button className="btn rounded-full border border-[#D7F36A] bg-transparent px-7 text-[#D7F36A] hover:bg-[#D7F36A] hover:text-[#123F43]">
                                Earn with ZapShift Courier
                            </button>

                        </div>
                    </div>

                    {/* Right image */}
                    <div className="w-full max-w-md lg:w-1/2">
                        <img
                            src={tracking}
                            alt="Parcel delivery"
                            className="w-full object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>
    ); 
};

export default Support;