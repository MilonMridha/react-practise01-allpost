import React, { useEffect, useState } from 'react';
import Album from '../OnlyAlbum/Album';
import './Albums.css'
const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setAlbums(data));
    },[])
    return (
        <div>
            <h2>My Albums :{albums.length}</h2>
            <div className='for-layout'>
            {
                albums.map(album =><Album id={album.id} title={album.title} userId={album.userId}></Album>)
            }
            </div>
        </div>
    );
};

export default Albums;