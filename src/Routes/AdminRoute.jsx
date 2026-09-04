import React from 'react';
import UseAuth from '../Hooks/UseAuth.jsx';
import Loader from '../Components/Loader/Loader.jsx';
import UseRole from '../Hooks/UseRole.jsx';
import Forbiden from '../Components/Forbiden/Forbiden.jsx';


const AdminRoute = ({children}) => {
    const { user, loading } = UseAuth();
    const {role,roleLoading} = UseRole()
    if (loading||roleLoading){
        return <Loader></Loader>
    }

    if (role !== 'admin') {
        return <Forbiden></Forbiden>
    }
    return children
};

export default AdminRoute;