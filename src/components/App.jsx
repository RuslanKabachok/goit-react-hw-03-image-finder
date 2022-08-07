import React, { Component } from 'react';
import Wrapper from './App.styled';
import SearchBar from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';

class App extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <SearchBar></SearchBar>
        <ImageGallery></ImageGallery>
        {/* <p>Loading...</p> */}
      </Wrapper>
    );
  }
}

export default App;
