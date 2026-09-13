import React, { Children, createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config.js';
import axios from 'axios';
import { AuthContext } from './AuthContext.jsx';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    // const axiosSecure = UseAxiosSecure() do not use
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);
    

    const createEmailUser = (email, password) => {
        setLoding(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInEmailUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
        
    } 

    const emailVerfication = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () => {
        setLoding(true)
        return signOut(auth)
    }

    const uodateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            // if (currentUser) {
            setUser(currentUser);
            if (currentUser) {
                // get email 
                const logUser = { email: currentUser.email }
                
                // axios.post('https://zaper-server.vercel.app/getToken', logUser, {
                //     withCredentials: true
                // })
                //     .then(res => {
                //         console.log('✅ Token received:', res.data);
                //         console.log('✅ Status:', res.status);
                //         setLoding(false);
                //     })
                //     .catch(err => {
                //         console.error('❌ Token request failed:', {
                //             status: err.response?.status,
                //             message: err.message,
                //             data: err.response?.data
                //         });
                //         setLoding(false);
                //     })
                fetch('https://zaper-server.vercel.app/getToken', {
                    method: "POST",
                    headers: {
                        'content-type':'application/json'
                    },
                    credentials:'include',
                    body: JSON.stringify(logUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // localStorage.setItem('token',data.token)
                    console.log(data)
                })

                
                // try to use axios 
            //     axiosSecure.post('/getToken', {
                    
            //     })
            //     .then(res=>console.log(res.data))
            // }
           
            }
            setLoding(false)
        })
        return ()=> unSubcribe()
        
    },[])

    
        
    // } 
     

    const authInfo = {
        user,
        loading,
        uodateUserProfile,
        createEmailUser,
        signInEmailUser,
        loginWithGoogle,
        emailVerfication,
        logOut
        
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;