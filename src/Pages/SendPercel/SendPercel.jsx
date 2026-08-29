import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2'
const SendPercel = () => {
    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const serviceCenter = useLoaderData();
    // console.log(serviceCenter)
    const regionsDuplicate = serviceCenter.map(c => c.region);
    // console.log(regionsDuplicate);
    const regions = [...new Set(regionsDuplicate)];
    // console.log(regions);
    const senderRegion = watch('senderRegion');
    const receiverRegion = watch('receiverRegion')

    const districtByRegion = (region) => {
        const regionDistrict = serviceCenter.filter(c => c.region === region);
        const district = regionDistrict.map(d => d.district);
        return district
    }



    const onSubmit = (data) => {
        console.log(data);
        const isDocument = data.percerlType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.percelWeight)

        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minPrice = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraPrice = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                cost = minPrice + extraPrice;
            }
        }
        console.log('total cost ', cost)
        Swal.fire({
            title: "Agree to the cost?",
            text: `Your total Cost is ${cost} taka`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Pay!"
        }).then((result) => {
            if (result.isConfirmed) Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        });

    }
    return (
        <div className='p-10'>
            <h1 className='text-secondary font-bold  text-3xl '>Send A Percel</h1>
            <p className='text-semibold text-xl text-secondary my-4'>Enter your percel details</p>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div className='mb-4'>
                    <label className='mr-5'>
                        <input type="radio" value="document" {...register('percerlType')}  className="radio" defaultChecked />
                        Document</label>
                    <label>
                        <input type="radio" value="non-document" {...register('percerlType')}  className="radio" defaultChecked />
                        Non-Document</label>
                
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <fieldset className="fieldset">
                        <label className="label">Percel Name</label>
                        <input type="text" className="input w-full" {...register('percelName')} placeholder="Percel Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Percel Weight (KG)</label>
                        <input type="text" className="input w-full" {...register('percelWeight')} placeholder="Percel Weight (KG)" />
                    </fieldset>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                 
                    <fieldset className="fieldset">
                        <h1 className='text-black font-bold text-secondary text-xl'>Sender Details</h1>
                        
                        <label className="label">Sender Name</label>
                        <input type="text" className="input w-full" {...register('senderName')} placeholder="Sender Name" />

                        <label className="label">Sender Email</label>
                        <input type="text" className="input w-full" {...register('email')} placeholder="Sender Email" />
                  
                        <label className="label">Address</label>
                        <input type="text" className="input w-full" {...register('senderAddress')} placeholder="Address" />
                        
                        <label className="label">Sender Phone No</label>
                        <input type="text" className="input w-full" {...register('senderPhone')} placeholder="Sender Phone No" />
                
                   
                        <label className="label">Sender District</label>
                        <select {...register('senderRegion')} className="select">
                            {regions.map((region,i)=> <option key={i} value={region}>{region}</option>)}
    
                        </select>

                        <select {...register('senderDistrict')} className="select">
                            {districtByRegion(senderRegion).map((region, i) => <option key={i} value={region}>{region}</option>)}

                        </select>
                        
                    </fieldset>
                        
                    <fieldset className="fieldset">
                        <h1 className='text-black font-bold text-secondary text-xl'>Receiver Details</h1>
                        <label className="label">Receiver Name</label>
                        <input type="text" className="input w-full" {...register('receiverName')} placeholder="receiver Name" />
                        <label className="label">Receiver Email</label>
                        <input type="text" className="input w-full" {...register('email')} placeholder="Receiver Email" />
                       
                        <label className="label">Address</label>
                        <input type="text" className="input w-full" {...register('receiverAddress')} placeholder="Address" />
                   
                        <label className="label">Receiver Phone No</label>
                        <input type="text" className="input w-full" {...register('receiverPhone')} placeholder="Receiver Phone No" />
                 
                        <label className="label">Receiver District</label>
                        <select {...register('receiverRegion')} className="select">
                            {regions.map((region, i) => <option key={i} value={region}>{region}</option>)}
                        </select> 

                        <select {...register('receiverDistrict')} className="select">
                            {districtByRegion(receiverRegion).map((region, i) => <option key={i} value={region}>{region}</option>)}

                        </select>
                    </fieldset>
                </div>

                <input className='btn btn-primary w-60 mt-5 text-black rounded-xl' type="submit" value="Send Percel" />

            </form>
        </div>
    );
};

export default SendPercel;