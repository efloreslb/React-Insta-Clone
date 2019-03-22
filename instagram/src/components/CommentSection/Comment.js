import React from 'react';
// import './comment.css';

import { CardText } from '../../../src/StyledComponents';

export default function Comment(props) {
    //console.log(props);
    return (
        <CardText>
            <strong>{props.username}</strong> {props.text}
        </CardText>
    )
}