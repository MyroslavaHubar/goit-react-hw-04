import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ImageModal({ image, closeModal, modalIsOpen }) {
  if (!image || !image.urls) return null;
  console.log(image);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.imageModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(171, 169, 169, 0.8)",
        },
        content: {
          // top: "50%",
          // left: "50%",
          // right: "auto",
          // bottom: "auto",
          // marginRight: "-50%",
          // transform: "translate(-50%, -50%)",
          // overflow: "hidden",
          // maxWidth: "70%",
          // maxHeight: "80%",
          // display: "flex",
          // flexDirection: "column",
          top: "5%",
          bottom: "5%",
          left: "5%",
          right: "5%",
          marginRight: "auto",
          marginLeft: "auto",
          transform: "none",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          maxHeight: "90vh", // Высота окна модального
          maxWidth: "90vw", // Ширина окна модального
        },
      }}
    >
      <div className={css.imageModalContainer}>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    </Modal>
  );
}

export default ImageModal;
