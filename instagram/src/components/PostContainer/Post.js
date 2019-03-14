import React from 'react';
import './post.css';
import 'https://use.fontawesome.com/releases/v5.7.2/css/all.css';

export default function Post(props) {
    console.log(props);
    return (
        <>
            <img className="thumbnail" src={props.thumbnail} alt='' />
            <h6>{props.username}</h6>
            <img className="postImg" src={props.image} alt='' />
            <i class="far fa-heart"></i>
            <h6>{props.likes}</h6>
        </>
    )
}