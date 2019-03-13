import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from '../dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {dummyData.map(post => <PostContainer />)}
      </div>
    );
  }
}

export default App;
