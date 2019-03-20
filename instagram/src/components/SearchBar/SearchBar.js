import React from 'react';
import './searchBar.css'
import { Form, Input } from 'reactstrap';

export default function SearchBar(props){
    return (
        <div className="searchBar">
            <div className="home">
                <i className="fab fa-instagram"></i> <h1>Instragram</h1>
            </div>

            <Form onSubmit={props.search}>
                <Input 
                    name="search"
                    placeholder="Search"
                    value={props.value} 
                    onChange={props.handleChange} 
                />
            </Form>

            <div className="explore">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user" onClick={props.logout}></i>
            </div>
        </div>
    )
}
