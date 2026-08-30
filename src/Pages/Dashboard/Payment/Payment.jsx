import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure.jsx';
import Loader from '../../../Components/Loader/Loader.jsx';


const Payment = () => {
    const axiosSecure = UseAxiosSecure()
    const { percelId } = useParams();
    const {isLoading, data:percel } = useQuery({
        queryKey: ['percles', percelId],
        queryFn: async() => {
            const res = await axiosSecure.get(`/percels/${percelId}`);
            // console.log(res.data)
            return res.data;
        }

    })


    const handlePayment = async() => {
        // console.log('payment');
        const paymentInfo = {
            costs: percel.costs,
            percelId: percel._id,
            senderEmail: percel.senderEmail,
            percelName:percel.percelName
        }
        const res = await axiosSecure.post('/create-checkout-session',paymentInfo)
        console.log(res.data);   
        window.location.href = res.data.url;
    }

    if (isLoading) {
        return <Loader></Loader>
        
    }
    return (
        <div>
            <h1>Pleace pay {percel.costs}  for {percel.percelName}</h1>
            <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;