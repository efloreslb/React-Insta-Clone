import React from 'react';
import {Container, Form, Input, Button, H1} from '../../../src/StyledComponents';
// import './login.css'
// import styled, {css} from 'styled-components';

export default class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: null
        }
    }

    handleChange = event => {
        this.setState({username: event.target.value})
        console.log(this.state)
      }

    login = event => {
        if (this.state.username !== null) {
            localStorage.setItem('username', [this.state.username])
        }
        else {
            alert("Please enter username")
        }
    }

    render() {
        return (
            <Container className="logincontainer">
                <Form className="loginform" onSubmit={this.login}>
                    <H1>Instagram</H1>
                    <Input className="field" name="username" placeholder="Username" value={this.state.value} onChange={this.handleChange}/>
                    <Input className="field" name="password" placeholder="Password" />
                    <Button primary expand color="primary">Log In</Button>
                </Form>
            </Container>
        )
    }
}