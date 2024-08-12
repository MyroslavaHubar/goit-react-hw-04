import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.modalGalleryList}>
      {images.map(({ id, description, urls: { small, regular } }) => {
        return (
          <li key={id} className={css.modalGalleryItem}>
            <ImageCard
              small={small}
              regular={regular}
              description={description}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
