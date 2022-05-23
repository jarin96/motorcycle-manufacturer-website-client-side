import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <h2>This is purchase page</h2>
            <p>User Name: {user?.displayName || ''}</p>
            <p>User Email: {user?.email || ''}</p>
        </div>
    );
};

export default Purchase;