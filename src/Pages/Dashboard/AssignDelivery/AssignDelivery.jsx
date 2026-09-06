import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure.jsx';
import UseAuth from '../../../Hooks/UseAuth.jsx';
import Swal from 'sweetalert2';

const AssignDelivery = () => {
    const axiosSecure = UseAxiosSecure()
    const { user } = UseAuth();
    const {data:percels=[] ,refetch} = useQuery({
        queryKey: ['percels', user.email,'Rider_Assign'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/percels/riders?riderEmail=${user.email}&deliveryStatus=Rider_Assign`)
            console.log(res.data);
            return res.data
        }
    })

    const handleDeliveryStatusUpdate = (percel,status) => {
        const statusInfo = {
            deliveryStatus: status,
           riderId: percel.riderId
        }
        let message = `percet statud is updated with ${status.split('_').join(' ') }`
        axiosSecure.patch(`/percels/${percel._id}/status`, statusInfo)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount) {
                    refetch()
                       Swal.fire({
                            position: "cemter",
                            icon: "success",
                            title: message,
                            showConfirmButton: false,
                            timer: 1500
                       });
                }
        })
    }
    return (
        <div>
            <h2> Accept Delivery</h2>
            <p>{percels.length }</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Costs</th>
                            <th>Confirm</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            percels.map((percel,index) => <tr>
                                <th>{index+1}</th>
                                <td>{percel.percelName}</td>
                                <td>{percel.costs}</td>
                                <td>
                                    {
                                        percel.deliveryStatus === 'Rider_Assign' ? <button onClick={() => handleDeliveryStatusUpdate(percel,'rider_arriving')} className='btn btn-secondary mr-2'>Accept</button>
                                            :
                                            <button className='btn btn-error ml-2'>Rider Accepted</button>
                                    }
                                    
                                </td>
                                <td>
                                    <button onClick={() => handleDeliveryStatusUpdate(percel,"percel_pickup")} className='btn btn-secondary mr-2'>Marked as PickUp</button>
                                    <button onClick={() => handleDeliveryStatusUpdate(percel,'percel_delivered')} className='btn btn-secondary mr-2'>Marked as Delivered</button>
                                </td>
                                
                            </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignDelivery;