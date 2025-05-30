import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const AlbumDetails = () => {
    const albumdetails = useLoaderData()
    const navigate = useNavigate()
    const {albumId} = useParams()
    console.log(albumId)

    const handelgoback = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>{albumdetails.title}</h3>
            <button onClick={handelgoback}>Go Back</button>
        </div>
    );
};

export default AlbumDetails;