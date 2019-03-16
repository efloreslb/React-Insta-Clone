import React from 'react';
import {Form, Input} from 'reactstrap';

export default function AddComment(props) {
    return (
        <Form onSubmit={props.add}>
            <Input 
                className="addComment" 
                name="newComment" 
                placeholder="Add a comment..." 
                onChange={props.inputChange}   
                value={props.value}
            />
        </Form>
    )
}