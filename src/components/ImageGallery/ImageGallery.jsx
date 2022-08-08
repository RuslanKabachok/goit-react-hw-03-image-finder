import React, { Component } from 'react';
import { GalleryList } from './ImageGallery.styled';
// import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {
    array: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=25284059-64aa950e28f1ef43b7bf646a1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(console.log)
        .then(array => this.setState({ array }));
    }
    console.log(this.state.array);
  }

  render() {
    return (
      <GalleryList>
        {this.state.array && <p>{this.state.array.total}</p>}
      </GalleryList>
    );
  }
}
//GalleryItem(this.state.searchQuery)
//this.props.searchQuery
