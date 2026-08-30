import React from 'react';

const Loader = () => {
    return (
        <div className='w-full min-h-[50vh] flex items-center justify-center'>
            <span className=" loading loading-dots loading-2xl"></span>
        </div>
    );
};

export default Loader;