import React from 'react';
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