import React from 'react';
import './post.css';
import PropTypes from 'prop-types';

import { CardImg, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

export default function Post(props) {
    // console.log(props);
    return (
        <>
            <CardTitle className="user">
                <img className="thumbnail" src={props.thumbnail} alt='' />
                <strong>{props.username}</strong>
            </CardTitle>
            <CardImg className="postImg" src={props.image} alt='' />
            <CardBody className="interact">
                <CardSubtitle className="interactButtons">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </CardSubtitle>
                <CardSubtitle className="likes">
                    <strong>{props.likes} likes</strong>
                </CardSubtitle>
            </CardBody>
        </>
    )
}

Post.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number
}