import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure.jsx';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UsersManagement = () => {
    const [search, setSearch] = useState('');

    const axiosSecure = UseAxiosSecure();
    const {data:users=[] ,refetch} = useQuery({
        queryKey: ['users',search],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users?search=${search}`)
            // console.log(res.data)
            return res.data;
    
        }
    })

    const SearchUser = (e) => {
        const searching = e.target.value;
        console.log(searching)
        setSearch(searching);
    }
    
    const handleMakeUser = (user) => {
        const roleInfo = { role: 'user' }
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    console.log(res.data)
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Change to "
                    }).then((result) => {
                        if (result.isConfirmed)
                            refetch()
                            Swal.fire({
                            title: "Deleted!",
                            text: "Your are user now.",
                            icon: "success"
                        });
                    });
                
            }
        })
    }
    const handleMakeAdmin = (user) => {
        const roleInfo={role:'admin'}
        axiosSecure.patch(`users/${user._id}/role`, roleInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    refetch()
                    if (res.data.modifiedCount) {
                        console.log(res.data)
                        Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, Change to "
                        }).then((result) => {
                            if (result.isConfirmed)
                                refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your are user now.",
                                icon: "success"
                            });
                        });

                    }
                }
        })
        
    }
    return (
        <div>
            <h1>user Mangement</h1>
            <p>{users.length}</p>
            <label className="input ml-5">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input onChange={SearchUser} type="search" required placeholder="Search user" />
            </label>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin Action</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user,index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photoURL}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.displayName}</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                            
                                    <td>{user.email}</td>
                                    <td>
                                        <button
                                            className={
                                                user.role === 'admin'
                                                    ? 'btn bg-red-500 text-white'
                                                    : 'btn bg-blue-500 text-white'
                                            }
                                        >
                                            {user.role === 'admin' ? <FiShieldOff onClick={()=>handleMakeUser(user)}/> : <FaUserShield onClick={()=>handleMakeAdmin(user)}/>}
                                        </button>
                                    </td>
                                    <td>{user.role}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            )
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;