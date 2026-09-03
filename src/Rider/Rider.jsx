 import React from 'react';
import { useForm } from 'react-hook-form';
import riderImg from '../assets/agent-pending.png'
import UseAuth from '../Hooks/UseAuth.jsx';
import { useLoaderData } from 'react-router';
import UseAxiosSecure from '../Hooks/UseAxiosSecure.jsx';
import Swal from 'sweetalert2';
 
const Rider = () => {
    const { user } = UseAuth();
    const axiosSecure=UseAxiosSecure()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const serviceCenter = useLoaderData();
    const regionsDuplicate = serviceCenter.map(reg => reg.region);
    const regions = [...new Set(regionsDuplicate)];
    const region = watch('region')

    const districtByRegion = (region) => {
        const regionDistrict = serviceCenter.filter(c => c.region === region);
        const district = regionDistrict.map(d => d.district);
        return district
    }
    const onSubmit = (data) => {
        console.log(data);
        axiosSecure.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                     Swal.fire({
                             position: "center",
                            icon: "success",
                            title: "Your Application succesfull Complete ",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    console.log('riderd Addesd');

            }
        })
    }
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 p-10'>
            <div className='flex-1'>
                <h1 className='text-3xl font-bold text-secondary'>Be a Rider</h1>
                <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                <form onSubmit={handleSubmit(onSubmit)} className='my-10'>
                        <fieldset className="fieldset">

                            <label className="label">Rider Name</label>
                            <input type="text" className="input w-full" {...register('riderName')} placeholder="Rider Name" defaultValue={user?.displayName} />

                            <label className="label">Driving License Number</label>
                            <input type="text" className="input w-full" {...register('drivingLicense')} placeholder="Driving License Number"  />

                            <label className="label">Your Email</label>
                            <input type="email" className="input w-full" {...register('email')} placeholder="Email" defaultValue={user?.email} />

                            <label className="label">Rider Region</label>
                            <select {...register('region')} className="select w-full">
                                {regions.map((region, i) => <option key={i} value={region}>{region}</option>)}
                            </select>

                            <select {...register('riderDistrict')} className="select w-full">
                                {districtByRegion(region).map((region, i) => <option key={i} value={region}>{region}</option>)}
                            </select>

                            <label className="label">NID No</label>
                            <input type="text" className="input w-full" {...register('nidno')} placeholder="NID No" />

                            <label className="label">Phone Number</label>
                            <input type="text" className="input w-full" {...register('phoneNumber')} placeholder="Phone Number" />

                            <label className="label">Bike Brand and Model and Year</label>
                            <input type="text" className="input w-full" {...register('bikeBrand')} placeholder="Bike Brand" />

                            <label className="label">Bike Registration Number</label>
                            <input type="text" className="input w-full" {...register('bikeRegistration')} placeholder="Bike Registration Number" />

                            <label className="label">Tell Us About Yourself</label>
                            <input type="text" className="input w-full" {...register('tellYourself')} placeholder="Tell Us About Yourself" />

                    </fieldset>
                    <input className='btn btn-primary mt-5 text-black rounded-xl w-full' type="submit" value="Submit" />
           
                </form>
            </div>

            <div className='flex-1'>
                <img src={riderImg} alt="" />
            </div>
      </div>
    );
 };
 
 export default Rider;