import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from './UseAuth.jsx';
import UseAxiosSecure from './UseAxiosSecure.jsx';

const UseRole = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure()
    const {data: role='user', isLoading:roleLoading} = useQuery({
        queryKey: ['user-role',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}/role`,)
            console.log(res.data)
            return res.data?.role || 'user'
        }
    })
    return {role,roleLoading};
};

export default UseRole;