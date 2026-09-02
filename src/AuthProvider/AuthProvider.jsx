import React, { Children, createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config.js';
import UseAxiosSecure from '../Hooks/UseAxiosSecure.jsx';
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true)

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
                const logUser= {email: currentUser.email}
                fetch('http://localhost:3000/getToken', {
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
            setLoding(false)
            }
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