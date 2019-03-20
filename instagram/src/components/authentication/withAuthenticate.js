import React from 'react';
import Login from '../Login/Login'

export default function withAuthentication(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

            }
        }
        render() {
            return (
                <>
                    <Login />
                   <Component /> 
                </>
            )
        }
    }
}