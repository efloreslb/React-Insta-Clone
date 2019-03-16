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

  render() {
    return (
      <div className="App">
      <SearchBar />
        <Container>
          {this.state.data.map(post => <PostContainer post={post} key={post.timestamp}/>)}
        </Container>
      </div>
    );
  }
}

export default App;
