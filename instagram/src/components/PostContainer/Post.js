import React from 'react';
import './post.css';
import PropTypes from 'prop-types';

import { CardImg, CardTitle } from 'reactstrap';

export default function Post(props) {
    // console.log(props);

    return (
        <>
            <CardTitle className="user">
                <img className="thumbnail" src={props.thumbnail} alt='' />
                <strong>{props.username}</strong>
            </CardTitle>
            <CardImg className="postImg" src={props.image} alt='' />
        </>
    )
}

Post.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number
}