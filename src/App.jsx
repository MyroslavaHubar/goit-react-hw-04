import { useEffect, useState } from "react";
import "./App.css";
import { getImage } from "./data/image-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchImages() {
      try {
        const result = await getImage(query, page);
        setImages(result);
      } catch (err) {
        console.log(err);
      }
    }

    fetchImages();
  }, [query, page]);

  return (
    <>
      <SearchBar />

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
    </>
  );
}

export default App;
