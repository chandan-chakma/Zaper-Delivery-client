import React, { Children, createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config.js';
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoding] = useState(true)

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

    const logOut = () => {
        setLoding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            // if (currentUser) {
            setUser(currentUser);
            setLoding(false)
            // }
        })
        return ()=> unSubcribe()
        
    },[])

    
        
    // } 
     

    const authInfo = {
        user,
        createEmailUser,
        signInEmailUser,
        loginWithGoogle,
        logOut
        
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;