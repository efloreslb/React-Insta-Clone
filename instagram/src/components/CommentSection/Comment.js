import React from 'react';
// import './comment.css';

import { CardText, Strong } from '../../../src/StyledComponents';

export default function Comment(props) {
    //console.log(props);
    return (
        <CardText>
            <Strong midstrength>{props.username}</Strong> {props.text}
        </CardText>
    )
}