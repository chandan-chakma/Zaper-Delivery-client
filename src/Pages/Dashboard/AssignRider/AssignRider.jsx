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
            console.log(res.data)
            return res.data
        }
        
    })
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
                                    <button onClick={()=>openAssignRiderModel(percel)} className="btn btn-primary text-black">Assign Rider</button>
                                </th>
                            </tr>)
                        }
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                        <dialog ref={ridermodalRef} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </tbody>
                
                </table>
            </div>
        </div>
    );
};

export default AssignRider;