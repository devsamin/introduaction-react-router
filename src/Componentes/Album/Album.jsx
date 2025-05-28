import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({album}) => {
    const {id, title} = album
    const albustyle = {
        border : '2px solid red',
        padding : '10px',

    }
    return (
        <div style={albustyle}>
            <h3>There is album id : {id}</h3>
            <p>{title}</p>
            <Link to={`/album/${id}`}>Details</Link>
        </div>
    );
};

export default Album;