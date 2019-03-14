import React from 'react';
import Comment from './Comment';

export default function CommentSection(props) {
    console.log(props.comments);
    return (
        <>
            {props.comments.map(comment => 
                <Comment username={comment.username} text={comment.text}/>
            )}
        </>
    )
}