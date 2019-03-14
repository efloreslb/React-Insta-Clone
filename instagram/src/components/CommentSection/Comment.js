import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';
import { CardText } from 'reactstrap';

export default function Comment(props) {
    //console.log(props);
    return (
        <CardText className="comment">
            <strong>{props.username}</strong> {props.text}
        </CardText>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}