import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './commentSection.css';
import {CardBody, Input} from 'reactstrap';

export default function CommentSection(props) {
    //console.log(props.comments);
    return (
        <CardBody className="commentSection">
            {props.comments.map(comment => 
                <Comment username={comment.username} text={comment.text} key={comment.text}/>
            )}
            <div className="timeStamp">{props.timeStamp}</div>
            <Input className="addComment" name="comment" placeholder="Add a comment..." />
        </CardBody>
    )
}

CommentSection.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
    timeStamp: PropTypes.string
}