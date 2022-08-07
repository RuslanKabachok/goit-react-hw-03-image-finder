import React, { Component } from 'react';
import Wrapper from './App.styled';
import SearchBar from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';

class App extends Component {
  state = {};

  componentDidMount() {}

  todo({ search }) {
    console.log('search:', search);
  }

  render() {
    return (
      <Wrapper>
        <SearchBar onSubmit={this.todo}></SearchBar>
        <ImageGallery></ImageGallery>
        {/* <p>Loading...</p> */}
      </Wrapper>
    );
  }
}

export default App;
