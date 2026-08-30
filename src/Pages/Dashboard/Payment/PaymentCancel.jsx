import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
    return (
        <div>
            <h1>Payment is Cancel</h1>
            <Link to='/dashboard/my-purcels'>
                <p>Try Again</p>
            </Link>
            
        </div>
    );
};

export default PaymentCancel;