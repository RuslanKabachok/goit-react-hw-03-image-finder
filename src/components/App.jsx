import React, { Component } from 'react';
import Wrapper from './App.styled';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <SearchBar></SearchBar>
      </Wrapper>
    );
  }
}

export default App;
