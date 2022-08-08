import { ImageGalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const GalleryItem = item => {
  <ImageGalleryItem>
    <GalleryImage src={item} alt={item} />
  </ImageGalleryItem>;
};
