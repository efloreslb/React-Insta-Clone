import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import './postContainer.css';
import { Card } from 'reactstrap';

export default function PostContainer(props) {
    //console.log(props.post);
    return (
        <Card className="postContainer">
            <Post username={props.post.username} thumbnail={props.post.thumbnailUrl} image={props.post.imageUrl} timeStamp={props.post.timeStamp} />
            <CommentSection comments={props.post.comments} likes={props.post.likes}/>
        </Card>
    )
}