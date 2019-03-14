import React from 'react';

export default function Comment(props) {
    console.log(props);
    return (
        <>
            <h6>{props.username}</h6>
            <p>{props.text}</p>
        </>
    )
}