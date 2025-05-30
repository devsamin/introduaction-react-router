import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Album = ({album}) => {
    const {id, title} = album
    const navegate = useNavigate()
    const albustyle = {
        border : '2px solid red',
        padding : '10px',

    }
    const handelclick = ()=>{
        navegate(`/album/${id}`)
    }
    return (
        <div style={albustyle}>
            <h3>There is album id : {id}</h3>
            <p>{title}</p>
            <Link to={`/album/${id}`}>Details</Link>
            <button onClick={handelclick}>View Details</button>
        </div>
    );
};

export default Album;