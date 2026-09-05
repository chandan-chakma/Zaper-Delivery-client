import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure.jsx';
import { TiTick } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';
import { FaSkullCrossbones } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: riders=[],refetch} = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            console.log(res.data)
            return res.data
            }
        
    })
    // comon function 
    const updateRiderStatus = (rider, status) => {
        // console.log(rider)
        const updateInfo = { status: status, email:rider.email }
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: "Approved",
                        text:` Your status has been ${status}.`,
                        icon: `${status==='Approved'?'success':'error'}`
                    });
                }
            })
    }

    const handleApproved = (rider) => {
        updateRiderStatus(rider,'Approved')
    
    }
    const handleRejection = (rider) => {
        updateRiderStatus(rider,'Rejected')
    }

    const handleDeleteRiders = (rider) => {
        // console.log("delete")
         Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
         })
             .then(result => {
                //  console.log(result)
                 if (result.isConfirmed) {
                     //  console.log('deletesd');
                     axiosSecure.delete(`/riders/${id}`)
                         .then(res => {
                             //  console.log(res);
                             if (res.data.deletedCount) {
                                 refetch()
                                   Swal.fire({
                                         title: "Deleted!",
                                         text: "Your percel has been deleted.",
                                         icon: "success"
                                      });
                             }
                             
                     })
                    
            }
        })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-secondary'>Approved Riders</h1>
            <p>{riders.length}</p>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>District</th>
                        <th>Application Status</th>
                        <th>Work Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        riders.map((rider, index) =>
                            <tr key={rider._id}>
                                <th>{index + 1}</th>
                                <td>{rider?.riderName}</td>
                                <td>{rider.email}</td>
                                <td>{rider.riderDistrict}</td>
                                <td>
                                    {
                                        rider.status === 'Approved' ? <p className='text-success'>{rider.status}</p>
                                            :
                                            <p className='text-red-500'>{rider.status}</p>
                                    }

                                </td>
                                <td>{rider.workStatus}</td>
                                <td>
                                    <button onClick={()=>handleApproved(rider)} className="btn btn-square mr-2">
                                        <TiTick />
                                    </button>
                                    <button onClick={()=>handleRejection(rider)} className="btn btn-square mr-2">
                                        <FaSkullCrossbones />
                                    </button>
                                    <button onClick={()=>{handleDeleteRiders(rider._id)}} className="btn btn-square mr-2">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ApproveRiders;