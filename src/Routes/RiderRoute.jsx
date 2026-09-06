import React from 'react';
import UseRole from '../Hooks/UseRole.jsx';
import Forbiden from '../Components/Forbiden/Forbiden.jsx';
import UseAuth from '../Hooks/UseAuth.jsx';
import Loader from '../Components/Loader/Loader.jsx';

const RiderRoute = ({ children }) => {
    const {user,loading} = UseAuth()
    const { role, roleLoading } = UseRole();
    if (loading || roleLoading) {
        return <Loader></Loader>
    }

    if (role === 'rider') {
        return children;
    }
    return <Forbiden></Forbiden>
  ;
};

export default RiderRoute;