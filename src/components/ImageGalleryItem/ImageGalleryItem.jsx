import { ImageGalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const GalleryItem = ({ largeImageURL, tags }) => {
  <ImageGalleryItem>
    <GalleryImage src={largeImageURL} alt={tags} />
  </ImageGalleryItem>;
};
