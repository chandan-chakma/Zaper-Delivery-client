import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider.jsx';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader/Loader.jsx';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
 
};

export default PrivateRoute;