import React from 'react';
import PropTypes from 'prop-types';

export default function Comment(props) {
    //console.log(props);
    return (
        <>
            <h6>{props.username}</h6>
            <p>{props.text}</p>
        </>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}