import React from 'react';
// import './post.css';
import PropTypes from 'prop-types';

import { CardImg, CardTitle, Thumbnail, Strong } from '../../../src/StyledComponents';

export default function Post(props) {
    // console.log(props);

    return (
        <>
            <CardTitle>
                <Thumbnail src={props.thumbnail} alt='' />
                <Strong>{props.username}</Strong>
            </CardTitle>
            <CardImg src={props.image} alt='' />
        </>
    )
}

Post.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number
}