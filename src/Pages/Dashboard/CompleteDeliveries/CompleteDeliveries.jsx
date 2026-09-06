import React from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure.jsx';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../../Hooks/UseAuth.jsx';

const CompleteDeliveries = () => {
    const axiosSecure = UseAxiosSecure();
    const {user}= UseAuth()
    const {data:percels=[] } = useQuery({
        queryKey: ['percels', user.email,'percel_delivered'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/percels/riders?riderEmail=${user.email}&deliveryStatus=percel_delivered`)
            console.log(res.data);
            return res.data
        }
    })


    // rider payment calculate

    const calculate = percel => {
        if (percel.senderDistrict === percel.receiverDistrict) {
            return percel.costs * 0.8;
        }
        else {
            return percel.costs*0.6
        }
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-secondary'>Complete Deliveries</h1>
            {percels.length}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Costs</th>
                            <th>Rider</th>
                            <th>PayOut</th>
                            <th>DeliveryStatus</th>
                            <th>Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            percels.map((percel, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{percel.percelName}</td>
                                <td>{percel.costs}</td>
                                <td>{percel.riderEmail} </td>
                                <th>{calculate(percel)}</th>
                                <td>{percel.deliveryStatus}</td>
                                <td>
                                    <button className='btn btn-primary text-black'>CashOut</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompleteDeliveries;