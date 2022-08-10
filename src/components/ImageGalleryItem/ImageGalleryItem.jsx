// import PropTypes from 'prop-types';
import { ImageGalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const GalleryItem = ({ mainImg, largeImg, onModal }) => {
  return (
    <ImageGalleryItem>
      <GalleryImage src={mainImg} alt="" onClick={() => onModal(largeImg)} />
    </ImageGalleryItem>
  );
};

// ImageGalleryItem.propTypes = {
//   img: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   bigImg: PropTypes.string.isRequired,
//   onModal: PropTypes.func.isRequired,
// };
