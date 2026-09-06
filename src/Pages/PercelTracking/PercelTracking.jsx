import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';

const PercelTracking = () => {
    const { trackingId } = useParams();
    const {data:trackingLogs=[] } = useQuery({
        queryKey: ['tracking', trackingId],
        queryFn:
            async () => {
                const res = await axios.get(`http://localhost:3000/percel-tracking/${trackingId}/logs`)
                console.log(res.data);
                return res.data
            }
        })
    return (
        <div>
            <h1>Percel Tracking</h1>
            <p>Logs {trackingLogs.length}</p>
            <p>percel Tracking Number is {trackingId}</p>
            <ul className="timeline timeline-vertical">
                {
                    trackingLogs.map((logs,index) =>
                        <li key={index}>
                            <div className="timeline-start">{new Date(logs.createAt).toLocaleString()}</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">{logs.details}</div>
                            <hr className='bg-primary'/>
                        </li>
                           
                    )
                }
             
            </ul>
        </div>
    );
};

export default PercelTracking;