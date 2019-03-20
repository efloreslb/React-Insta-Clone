import React from 'react';
import {Container, Form, Input, Button} from 'reactstrap';
import './login.css'


export default class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {

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
            alert("Empty username")
        }
    }

    render() {
        return (
            <Container className="logincontainer">
                <Form className="loginform" onSubmit={this.login}>
                    <h2>Instagram</h2>
                    <Input className="field" name="username" placeholder="Username" value={this.state.value} onChange={this.handleChange}/>
                    <Input className="field" name="password" placeholder="Password" />
                    <Button body inverse color="primary">Log In</Button>
                </Form>
            </Container>
        )
    }
}