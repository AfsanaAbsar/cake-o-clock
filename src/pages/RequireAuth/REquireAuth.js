import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const REquireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <div>Loading</div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default REquireAuth;