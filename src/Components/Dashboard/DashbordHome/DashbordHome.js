import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashbordHome = () => {
    const {user} = useAuth();
    return (
        <div className="mx-2 text-center">
            <h1>Welcome {user.displayName} <br /> to your Dashboard!</h1>
            <p>You Can Explore your data in your dashboard</p>

        </div>
    );
};

export default DashbordHome;