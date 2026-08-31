import { useQueries, useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../Hooks/UseAuth.jsx';
import axios from 'axios';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure.jsx';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyPurcels = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure()
    const { data: percels = [], refetch } = useQuery({
        queryKey: ['my-percels', user?.email],
        queryFn: async () => {
            const res =await axiosSecure.get(`/percels?email=${user.email}`);
            // console.log(res.data);
            return res.data;
        }
    })

    const handleDeletePercel = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/percels/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount) {
                            // refresh the data ui 
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your percel has been deleted.",
                                icon: "success"
                            });
                        
                        }
                })
                
                
            } 
        });

    }


    const handlePostPaymetn = async (percel) => {
        const paymentInfo = {
            costs: percel.costs,
            percelId: percel._id,
            senderEmail: percel.senderEmail,
            percelName: percel.percelName
        }
        const res = await axiosSecure.post('/payment-checkout-seccion', paymentInfo)
        console.log(res.data);
        window.location.href = res.data.url;

    }
    return (
        <div className='m-10'>
            <h1 className='font-bold text-3xl text-secondary'>My Purcels {percels.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment Status</th>
                            <th>Delivery Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            percels.map((percel,index) =>
                                <tr key={percel._id}>
                                    <th>{index+1}</th>
                                    <td>{percel.percelName}</td>
                                    <td>{percel.costs}</td>
                                    <td>
                                        {
                                            percel.paymentStatus === 'paid' ? <span className='btn btn-sm btn-success'>
                                                Paid
                                            </span> : 
                                                <button onClick={()=>handlePostPaymetn(percel)} className='btn btn-sm btn-primary text-black'>
                                                    Pay
                                                </button>

                                               
                                            // <Link to={`/dashboard/payment/${percel._id}`}>
                                            //     <button className='btn btn-sm btn-primary text-black'>
                                            //         Pay
                                            //     </button>
                                            // </Link> 
                                        }
                                    </td>
                                 
                                    <td>{percel.deliveryStatus}</td>
                                    <td>
                                        <button className="btn btn-square mr-2">
                                            <FaMagnifyingGlass />
                                        </button>
                                        <button className="btn btn-square mr-2">
                                            <FaEdit />
                                        </button>
                                        <button onClick={()=>{handleDeletePercel(percel)}} className="btn btn-square mr-2">
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPurcels;