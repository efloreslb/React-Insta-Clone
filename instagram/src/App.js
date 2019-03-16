import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import { Container } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({data: dummyData})
  }

  handleChange = event => {
    this.setState({criteria: event.target.value})
  }

  search = event => {
    event.preventDefault();
    console.log(`searched ${this.state.criteria}`)

    this.setState(prevState => {
      return {
        data: prevState.data.map(object => {
          return {
            data: [],
            comments: object.comments.filter(comment => {
              return comment.username === this.state.criteria
            })
          }
        })
      }
    })
  }

  render() {
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
            key={post.timestamp}
          />)}
        </Container>
      </div>
    );
  }
}

export default App;
