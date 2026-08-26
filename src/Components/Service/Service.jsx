import React from 'react';
import { GiPickOfDestiny } from "react-icons/gi";
import serviceImg from '../../assets/service.png'
import casino from '../../assets/brands/casio.png';
import amazon from '../../assets/brands/amazon.png';
import monstar from '../../assets/brands/moonstar.png';
import star from '../../assets/brands/star.png';
import starPople from '../../assets/brands/start_people.png';
import randstad from '../../assets/brands/randstad.png'
const Service = () => {
    return (
        <div className='p-5'>
            <div className='px-10'>
                <h1 className='font-bold text-2xl text-secondary'>How It Works</h1>

                {/* work section */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 justify-center'>
                    <div className="card w-[285px] h-[245px] bg-base-100 card-md shadow-sm rounded-3 p-5 my-5">
                        <div className='pl-3'>
                            <GiPickOfDestiny className='w-[56px] h-[56px]' />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-secondary font-semibold text-xl">Booking Pick & Drop</h2>
                            <p className='text-[#606060] text-md'>From personal packages to business shipments — we deliver on time, every time.</p>
                        </div>
                    </div>
                    <div className="card w-[285px] h-[245px] bg-base-100 card-md shadow-sm rounded-3 p-5 my-5">
                        <div className='pl-3'>
                            <GiPickOfDestiny className='w-[56px] h-[56px]' />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-secondary font-semibold text-xl">Cash On Delivery</h2>
                            <p className='text-[#606060] text-md'>From personal packages to business shipments — we deliver on time, every time.</p>
                        </div>
                    </div>
                    <div className="card w-[285px] h-[245px] bg-base-100 card-md shadow-sm rounded-3 p-5 my-5">
                        <div className='pl-3'>
                            <GiPickOfDestiny className='w-[56px] h-[56px]' />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-secondary font-semibold text-xl">Delivery Hyb</h2>
                            <p className='text-[#606060] text-md'>From personal packages to business shipments — we deliver on time, every time.</p>
                        </div>
                    </div>
                    <div className="card w-[285px] h-[245px] bg-base-100 card-md shadow-sm rounded-3 p-5 my-5">
                        <div className='pl-3'>
                            <GiPickOfDestiny className='w-[56px] h-[56px]' />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-secondary font-semibold text-xl">Booking SME & Corporate</h2>
                            <p className='text-[#606060] text-md'>From personal packages to business shipments — we deliver on time, every time.</p>
                        </div>
                    </div>
                </div>
            </div>
            


            {/* Service Section  */}

            <div className='bg-secondary p-2 md:p-10 mt-5'>
                <div className='text-center'>
                    <h1 className='text-white text-3xl'>Our Services</h1>
                    <p className='text-accent font-normal my-3'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to
                        <br></br>
                        business shipments — we deliver on time, every time.</p>
                </div>

                <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-5 justify-center items-center'>
                    <div className="card bg-base-100 w-full h-70 shadow-sm">
                        <figure className='w-[70px] h-[70px] mx-auto bg-[#EEEDFC] rounded-full mt-5'>
                            <img className=''
                                src={serviceImg}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-secondary font-bold text-xl">
                                Nationwide Delivery
                            </h2>
                            <p className='text-black'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full h-70 shadow-sm">
                        <figure className='w-[70px] h-[70px] mx-auto bg-[#EEEDFC] rounded-full  mt-5'>
                            <img className=''
                                src={serviceImg}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-secondary font-bold text-xl">
                                Fullfillment Solution
                            </h2>
                            <p className='text-black'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full h-70 shadow-sm">
                        <figure className='w-[70px] h-[70px] mx-auto bg-[#EEEDFC] rounded-full  mt-5'>
                            <img className=''
                                src={serviceImg}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-secondary font-bold text-xl">
                                Cash On Home Delivery
                            </h2>
                            <p className='text-black'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full h-70 shadow-sm">
                        <figure className='w-[70px] h-[70px] mx-auto bg-[#EEEDFC] rounded-full  mt-5'>
                            <img className=''
                                src={serviceImg}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-secondary font-bold text-xl">
                                Corporate Service / Contact In Logistics
                            </h2>
                            <p className='text-black'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full h-70 shadow-sm">
                        <figure className='w-[70px] h-[70px] mx-auto bg-[#EEEDFC] rounded-full  mt-5'>
                            <img className=''
                                src={serviceImg}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-secondary font-bold text-xl">
                                Percel Return
                            </h2>
                            <p className='text-black'>Customized corporate services which includes warehouse and inventory management support.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full h-70 shadow-sm">
                        <figure className='w-[70px] h-[70px] mx-auto bg-[#EEEDFC] rounded-full  mt-5'>
                            <img className=''
                                src={serviceImg}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-secondary font-bold text-xl">
                                Express & Standard Delivery
                            </h2>
                            <p className='text-black'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                        </div>
                    </div>

                </div>
                
            </div>


            {/* sales team  */}

            <div className='my-8'>
                <h1 className='text-secondary font-bold text-xl text-center'>We have helped thousands of sales teams</h1>
                <div className='flex flex-col gap-5 md:flex-row md:gap-10 justify-center mt-5'>
                    <img src={casino} alt="" />
                    <img src={amazon} alt="" />
                    <img src={monstar} alt="" />
                    <img src={star} alt="" />
                    <img src={starPople} alt="" />
                    <img src={randstad} alt="" />
                </div>
            </div>
       
        </div>
    );
};

export default Service;