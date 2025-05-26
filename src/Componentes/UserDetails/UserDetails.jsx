import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData()
    return (
        <div>
            <h3>Details page {user.name}</h3>
        </div>
    );
};

export default UserDetails;