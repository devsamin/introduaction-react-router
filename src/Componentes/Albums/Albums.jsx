import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Album from '../Album/Album';

const Albums = () => {
    const albums = useLoaderData()
    return (
        <div>
            <h3>Album Length : {albums.length}</h3>
            <div className='userser'>
                {
                    albums.map(album => <Album key={album.id} album={album}></Album>)
                }
            </div>
        </div>
    );
};

export default Albums;