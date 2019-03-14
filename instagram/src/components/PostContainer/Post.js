import React from 'react';
import './post.css';

export default function Post(props) {
    // console.log(props);
    return (
        <>
            <div className="user">
                <img className="thumbnail" src={props.thumbnail} alt='' />
                <h6>{props.username}</h6>
            </div>

            <img className="postImg" src={props.image} alt='' />

            <div className="interaction">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <h6>{props.likes} likes</h6>
            </div>
            
        </>
    )
}