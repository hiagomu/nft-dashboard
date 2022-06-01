import React, { useState } from 'react'

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [user, setUser] = useState({address: undefined});
    const [balance, setBalance] = useState();

    return (
        <AuthContext.Provider value={{user, setUser, balance, setBalance}}>
            {props.children}
        </AuthContext.Provider>
    );
}