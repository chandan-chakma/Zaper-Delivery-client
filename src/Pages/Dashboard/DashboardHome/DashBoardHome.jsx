import React from 'react';
import UseRole from '../../../Hooks/UseRole.jsx';
import Loader from '../../../Components/Loader/Loader.jsx';
import AdminDashboard from '../AdminDashboard/AdminDashboard.jsx';
import RiderDashboard from '../RiderDashboard/RiderDashboard.jsx';
import UserDashboard from '../UserDashboard/UserDashboard.jsx';

const DashBoardHome = () => {
    const { role, roleLoading } = UseRole();
    if (roleLoading) {
        return <Loader></Loader>
    }
    if (role === 'admin') {
        return <AdminDashboard></AdminDashboard>
    }
    else if (role === 'rider') {
        return <RiderDashboard></RiderDashboard>;
    }
    else {
        return <UserDashboard></UserDashboard>
    }
    return (
        <div>
            <h1 className='font-bold text-3xl text-secondary'>DashBoard Home</h1>
          
        </div>
    );
};

export default DashBoardHome;