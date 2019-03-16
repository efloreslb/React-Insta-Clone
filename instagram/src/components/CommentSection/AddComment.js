import React from 'react';
import {Form, Input} from 'reactstrap';

export default function AddComment(props) {
    return (
        <Form onSubmit={props.addNewComment}>
            <Input 
                className="addComment" 
                name="comment" 
                placeholder="Add a comment..." 
                onChange={props.inputChange}   
            />
        </Form>
    )
}