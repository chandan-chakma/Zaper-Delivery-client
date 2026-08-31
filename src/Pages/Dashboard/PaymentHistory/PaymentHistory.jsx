import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../Hooks/UseAuth.jsx';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure.jsx';


const PaymentHistory = () => {
    const { user } = UseAuth()
    const axiosSecure = UseAxiosSecure()
    const {data: payments=[] } = useQuery({
        queryKey: ['payments',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            console.log(res);
            return res.data
        }
    })
    return (
        <div>
            <h1 className='text-secondary font-bold text-2xl my-8'>Payment History</h1>
            <p>{payments.length}</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            payments.map((payment,index) =>
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.percelName}</td>
                                    <td>{payment.amount}</td>
                                    <td>{payment.trasactionId}</td>
                                </tr>
                            )
                        }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;