import { useEffect, useState } from "react";
import "./App.css";
import { getImage } from "./data/image-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const result = await getImage(query, page);
        setImages((prevImages) => [...prevImages, ...result.results]);
      } catch (err) {
        console.log(err);
      }
    }
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  function openModal(image) {
    setIsOpen(true);
    setModalImage(image);
  }

  function closeModal() {
    setIsOpen(false);
    setModalImage(null);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      <ImageModal
        image={modalImage}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
