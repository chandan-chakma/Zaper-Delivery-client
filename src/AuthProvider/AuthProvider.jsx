import React, { Children, createContext, useContext } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config.js';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const createEmailUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInEmailUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createEmailUser,
        signInEmailUser
        
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;