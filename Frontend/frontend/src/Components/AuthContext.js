import React, {  createContext, useEffect, useState } from 'react'

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const[token,setToken]=useState(null)
    // const[loading,setLoading]=useState(true);

    useEffect(()=>{
        const storedToken=localStorage.getItem("token");
        setToken(storedToken);
        // setLoading(false)
    },[]);

    return(
     <AuthContext.Provider value={{ token, setToken}}>
        {children}
     </AuthContext.Provider>
    );
}