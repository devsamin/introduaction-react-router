import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Userinfo.css'
const Servises = () => {

    const users = useLoaderData()
    return (
        <div>
            <h3>Our Services</h3>
            <h2>Total users : {users.length}</h2>
            <div className='userser'>
                {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Servises;