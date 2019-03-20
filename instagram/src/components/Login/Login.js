import React from 'react';
import {Container, Form, Input, Button} from 'reactstrap';


export default class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    handleChange = event => {
        this.setState({username: event.target.value})
      }

    login = event => {
        localStorage.setItem('username', [this.state.username])
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.login}>
                    <Input name="username" placeholder="Username" value={this.state.value} onChange={this.handleChange}/>
                    <Input name="password" placeholder="Password" />
                    <Button>Log In</Button>
                </Form>
            </Container>
        )
    }
}