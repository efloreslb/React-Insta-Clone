import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import './postContainer.css';
import { Card } from 'reactstrap';

export default function PostContainer(props) {
    //console.log(props.post);
    return (
        <Card className="postContainer">
            <Post username={props.post.username} thumbnail={props.post.thumbnailUrl} image={props.post.imageUrl} likes={props.post.likes}/>
            <CommentSection comments={props.post.comments} timeStamp={props.post.timestamp}/>
        </Card>
    )
}