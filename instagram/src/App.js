import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
        <Container>
          {dummyData.map(post => <PostContainer post={post} key={post.timestamp}/>)}
        </Container>
      </div>
    );
  }
}

export default App;
