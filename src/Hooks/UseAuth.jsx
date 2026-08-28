import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider.jsx';

const UseAuth = () => {
    const authInfo = useContext(AuthContext);
    return authInfo;
};

export default UseAuth;