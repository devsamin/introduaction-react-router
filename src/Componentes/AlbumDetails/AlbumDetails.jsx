import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AlbumDetails = () => {
    const albumdetails = useLoaderData()
    return (
        <div>
            <h3>{albumdetails.title}</h3>
        </div>
    );
};

export default AlbumDetails;