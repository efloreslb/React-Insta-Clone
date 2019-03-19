import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import { Container } from 'reactstrap';

import PostsPage from './components/PostContainer/PostsPage'

class App extends Component {
  render() {
    return <PostsPage />
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: []
//     }
//   }

//   componentDidMount() {
//     this.setState({
//       data: dummyData,
//       comments: this.state.data.map(post=>post.comments.filter(comment=>comment))
//     })
//   }

//   handleChange = event => {
//     this.setState({criteria: event.target.value})
//   }

//   search = event => {
//     event.preventDefault();
//     console.log(`searched ${this.state.criteria}`);

//     this.setState(prevState => {
//       return {
//         comments: prevState.comments.filter(comment => comment.username === this.state.criteria)
//       }
//     })
//   }

//   render() {
//     console.log(this.state);
//     return (
//       <div className="App">
//         <SearchBar 
//           value={this.state.value} 
//           handleChange={this.handleChange}
//           search={this.search}
//         />
//         <Container>
//           {this.state.data.map(post => <PostContainer 
//             post={post} 
//             key={Date.now() + Math.random()}
//           />)}
//         </Container>
//       </div>
//     );
//   }
// }

export default App;
