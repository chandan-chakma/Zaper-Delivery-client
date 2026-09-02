import React, { useEffect } from 'react';
import axios from "axios";
import UseAuth from './UseAuth.jsx';

const axiosSecure = axios.create({
    baseURL:'http://localhost:3000'
})

const UseAxiosSecure = () => {
    const { user } = UseAuth();
    useEffect(() => {
        // intercept request 
        axiosSecure.interceptors.request.use((config) => {
            console.log(config);
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config;
        })
      
    },[user])

    return axiosSecure ;
};

export default UseAxiosSecure;