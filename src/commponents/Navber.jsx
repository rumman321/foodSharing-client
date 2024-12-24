import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Navber = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default Navber;