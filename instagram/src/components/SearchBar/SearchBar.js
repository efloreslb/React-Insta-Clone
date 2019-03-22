import React from 'react';
// import './searchBar.css'
import {Header, Form, Input, H1, Divider, RowContainer} from '../../../src/StyledComponents';

export default function SearchBar(props){
    return (
        <Header>
            <RowContainer>
                <i className="fab fa-instagram"></i>
                <Divider></Divider>
                <H1>Instragram</H1>
            </RowContainer>

            <Form onSubmit={props.search}>
                <Input 
                    name="search"
                    placeholder="Search"
                    value={props.value} 
                    onChange={props.handleChange} 
                />
            </Form>

            <RowContainer>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user" onClick={props.logout}></i>
            </RowContainer>
        </Header>
    )
}
