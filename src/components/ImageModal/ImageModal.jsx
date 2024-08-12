import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ImageModal({ image, closeModal, modalIsOpen }) {
  if (!image || !image.urls) return null;
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      // className={css.imageModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(171, 169, 169, 0.8)",
        },
        // content: {
        //   top: "50%",
        //   left: "50%",
        //   right: "auto",
        //   bottom: "auto",
        //   marginRight: "-50%",
        //   transform: "translate(-50%, -50%)",
        // },
      }}
    >
      <img
        className={css.image}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <div className={css.imageModalInfo}>
        <p>Author: {image.user?.name || "Unknown"}</p>
        <p>Description: {image.description || "No description available"}</p>
      </div>
    </Modal>
  );
}

export default ImageModal;
