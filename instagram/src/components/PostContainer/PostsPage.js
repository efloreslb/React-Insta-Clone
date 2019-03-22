import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import { Body } from '../../../src/StyledComponents';


class PostsPage extends Component {
    constructor() {
      super();
      this.state = {
        data: []
      }
    }
  
    componentDidMount() {
      this.setState({
        data: dummyData
      })
    }
  
    handleChange = event => {
      this.setState({criteria: event.target.value})
    }

    search = event => {
        event.preventDefault();
        // console.log(`searched ${this.state.criteria}`);

        this.setState({data: this.state.data.filter(post => {
            return post.username === this.state.criteria
        })})
    }

    logOut = event => {
        localStorage.clear();
        window.location.reload();
    }
  
    // searchComment = event => {
    //   event.preventDefault();
    //   console.log(`searched ${this.state.criteria}`);

    //   this.setState(prevState => {
    //     return {
    //       comments: prevState.comments.filter(comment => comment.username === this.state.criteria)
    //     }
    //   })
    // }
  
    render() {
    //   console.log(this.state);
      return (
        <div className="App">
          <SearchBar 
            value={this.state.value} 
            handleChange={this.handleChange}
            search={this.search}
            logout={this.logOut}
          />
          <Body>
            {this.state.data.map(post => <PostContainer 
              post={post} 
              key={Date.now() + Math.random()}
            />)}
          </Body>
        </div>
      );
    }
  }

  export default PostsPage;