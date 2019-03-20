import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import { Container } from 'reactstrap';


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
          />
          <Container>
            {this.state.data.map(post => <PostContainer 
              post={post} 
              key={Date.now() + Math.random()}
            />)}
          </Container>
        </div>
      );
    }
  }

  export default PostsPage;