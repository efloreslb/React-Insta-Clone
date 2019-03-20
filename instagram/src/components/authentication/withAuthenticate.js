import React from 'react';

const withAuthentication = PostsPage => LoginPage => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem("username") !== null) {
                this.setState({loggedIn: true})
            }
        }

        render() {
            return (
                <>
                    {this.state.loggedIn === true ? <PostsPage /> : <LoginPage />}
                </>
            )
        }
    }
}

export default withAuthentication;