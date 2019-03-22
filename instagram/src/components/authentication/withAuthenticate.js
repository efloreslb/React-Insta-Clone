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
                // setTimeout(() => {
                    this.setState({loggedIn: true})
                // }, 1000);
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