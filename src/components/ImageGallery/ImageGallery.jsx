import React, { Component } from 'react';
import { GalleryList } from './ImageGallery.styled';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryImage } from './ImageGallery.styled';
// import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export default class ImageGallery extends Component {
  state = {
    array: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=25284059-64aa950e28f1ef43b7bf646a1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          return response.json();
        })
        .then(({ hits }) => this.setState({ array: hits }));
    }
  }

  render() {
    return (
      <GalleryList>
        {this.state.array &&
          this.state.array.map(item => (
            <GalleryItem key={item.id}>
              <GalleryImage
                src={item.largeImageURL}
                alt={item.tags}
              ></GalleryImage>
            </GalleryItem>
            // <li key={item.id} className={css.list}>
            //   <img
            //     src={item.largeImageURL}
            //     alt={item.tags}
            //     className={css.image}
            //   />
            // </li>
          ))}
      </GalleryList>
    );
  }
}
