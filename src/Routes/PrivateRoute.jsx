import React, { useContext } from 'react';
// import { AuthContext } from '../AuthProvider/AuthProvider.jsx';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader/Loader.jsx';
import UseAuth from '../Hooks/UseAuth.jsx';


const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();
    console.log('PRIVATE ROUTE RUNNING');
    // console.log("PrivateRoute:", {
    //     user,
    //     loading,
    //     pathname: location.pathname
    // });
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>

 
};

export default PrivateRoute;