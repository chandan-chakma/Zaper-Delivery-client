import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure.jsx';

const AssignRider = () => {
    const axiosSecure = UseAxiosSecure();
    const [seletedPercel, setSelectedPercel] = useState(null)
    const ridermodalRef = useRef();
    const openAssignRiderModel = (percel) => {
        setSelectedPercel(percel);
        ridermodalRef.current.showModal();
    }
    // data loade query for percel peniding delviery wise 
    const {data:percels=[] } = useQuery({
        queryKey: ['percles', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/percels?deliveryStatus=peniding')
            // console.log(res.data)
            return res.data
        }
    })

    // in open modal we need to assign rider so we need to make rider query for load rider 
    const {data:riders=[] } = useQuery({
        queryKey: ['riders', seletedPercel?.senderDistrict,'Available'],
        enabled:!!seletedPercel, //when click rider then it willopen rider info so it will not reloas with percel info
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders?status=Approved&district=${seletedPercel.senderDistrict}&workStatus=Available`);
            console.log(res.data)
            return res.data;
        }
    })


    const handleAssignRider = (rider) => {
        const riderAssignInfo = {
            riderId: rider._id,
            rederEmail: rider.email,
            riderName: rider.riderName,
            percelId :seletedPercel._id
        }
        axiosSecure.patch(``, riderAssignInfo)
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-secondary'>Assign Rider</h1>
            <p>{percels.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Costs</th>
                            <th>tracking Number</th>
                            <th>Pickup Area</th>
                            <th>Delivery Area</th>
                            <th>Sending time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            percels.map((percel,index) => <tr key={index}>
                                <td>{percel.percelName}</td>
                                <td>{percel.costs}
                                </td>
                                <td>{percel.trackingId}</td>
                                <td>{percel.senderRegion}, {percel.senderDistrict}</td>
                                <td>{percel.receiverRegion}, {percel.receiverDistrict}</td>
                                <td>{percel.createdAt}</td>
                                <th>
                                    <button onClick={()=>openAssignRiderModel(percel)} className="btn btn-primary text-black">Select Riders</button>
                                </th>
                            </tr>)
                        }
                       
                    </tbody>
                
                </table>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                <dialog ref={ridermodalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{riders.length}</h3>
                        {
                            riders.map((rider, index) => <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>{index+1}</th>
                                            <td>{rider.riderName}</td>
                                            <td>rider.email</td>
                                            <td>
                                                <button onClick={()=>handleAssignRider(rider)} className='btn btn-secondary'>
                                                    Assign

                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>)
                        }
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AssignRider;