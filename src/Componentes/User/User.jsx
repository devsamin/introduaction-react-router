import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    console.log(user)
    const {id, name, phone, username}= user
    const userstyle = {
        border : '2px solid red',
        padding : '10px',

    }
    return (
        <div style={userstyle}>
            <h2>{name}</h2>
            <h2>{phone}</h2>
            <h2>{username}</h2>
            <Link to={`/services/${id}`}>Details</Link>
        </div>
    );
};

export default User;