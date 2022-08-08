import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import axios from 'axios';
import Wrapper from './App.styled';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';

class App extends Component {
  state = { images: null, keyWord: '', loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    const URL = `https://pixabay.com/api/?q=${this.state.keyWord}&page=1&key=25284059-64aa950e28f1ef43b7bf646a1${this.state.keyWord}&image_type=photo&orientation=horizontal&per_page=12`;
    fetch(URL)
      .then(response => response.json())
      .then(images => this.setState({ images }))
      .finally(this.setState({ loading: false }));
  }

  onSearch = search => {
    this.setState({ keyWord: search });
  };

  render() {
    return (
      <Wrapper>
        <SearchBar onSubmit={this.onSearch}></SearchBar>
        <ImageGallery searchQuery={this.state.keyWord}></ImageGallery>
        {this.state.loading && <p>Loading...</p>}
        {/* <ToastContainer autoClose={3000} /> */}
      </Wrapper>
    );
  }
}

export default App;
