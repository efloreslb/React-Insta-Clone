import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

import { Button, Container } from 'reactstrap';

export default function PostContainer(props) {
    //console.log(props.post);
    return (
        <>
            <Container>
                <Post username={props.post.username} thumbnail={props.post.thumbnailUrl} image={props.post.imageUrl} likes={props.post.likes}/>
                <CommentSection />
            </Container>
            
        </>

    )
}