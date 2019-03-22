import React from 'react';
import {Form, Input} from '../../../src/StyledComponents';

export default function AddComment(props) {
    return (
        <Form onSubmit={props.add}>
            <Input 
                expand
                comment
                name="newComment" 
                placeholder="Add a comment..." 
                onChange={props.inputChange}   
                value={props.value}
            />
        </Form>
    )
}