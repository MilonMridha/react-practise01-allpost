import React from 'react';
import './Album.css'
const Album = (props) => {
    return (
        <div className='album'>
            <h2>id : {props.id}</h2>
            <h3>title :{props.title}</h3>
            <h4>userId :{props.userId}</h4>
        </div>
    );
};

export default Album;