import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { userName, user_email, user_photoURL} = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 card-lg shadow-sm">
                <div className="card-body">
                 
                    <FaQuoteRight className='text-secondary text-2xl mb-4 opacity-50' />
                    <p>A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. </p>
                    <div className='border-t-2 border-dashed border-secondary my-4'>
                    </div>
                    <div className="justify-start card-actions items-center">
                            <img className='border w-15 h-15 rounded-full bg-secondary p-1' src={user_photoURL} alt="" />
                        <div>
                            <h2 className='text-secondary font-bold text-xl'>{userName}</h2>
                            <p className='text-black text-md'>{user_email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;