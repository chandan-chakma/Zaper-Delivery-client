import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure.jsx';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const sessionId = searchParams.get('session_id');
    console.log(sessionId);

    const axiosSecure = UseAxiosSecure()
    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data);
                    setPaymentInfo({
                        trackingId: res.data.trackingId,
                        transactionId: res.data.transactionId

                    })

            })
        }
        
    }, [sessionId])
    return (
        <div>
            <h2 className='text-success'>Payment Success</h2>
            <p>Your transactonId is {paymentInfo?.transactionId}</p>
            <p>Your trackingId is {paymentInfo?.trackingId}</p>
            <p></p>
        </div>
    );
};

export default PaymentSuccess;