import React, { useEffect } from 'react';
import axios from "axios";
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router';
import UseAuth from './UseAuth.jsx';

const axiosSecure = axios.create({
    baseURL:'http://localhost:3000'
})

const UseAxiosSecure = () => {
    const { user, logOut } = UseAuth();
    // const {user,logOut} = UseAuth()
    const navigate = useNavigate()
    useEffect(() => {
        // intercept request 
        const requestInterceptor =axiosSecure.interceptors.request.use((config) => {
            console.log(config);
            // for locatstorage save token and firebase
            // config.headers.Authorization = `Bearer ${user?.accessToken}` 
            // now we use htttpOnlyCookies 
            config.withCredentials = true;
            return config;
        })

        // responses interceptores
        const responseInterceptor = axiosSecure.interceptors.response.use((response) => {

            return response;
        },
            (error) => {
                const status = error.status; 
                // console.log(error);
                if (status === 401 || status === 403) {
                    console.log("bad intention");
                    logOut()
                        .then(() => {
                            navigate('/login')
                    })
                }
                return Promiss.reject(error);
            }
        )

        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        }

      
    },[user,logOut,navigate])

    return axiosSecure ;
};

export default UseAxiosSecure;