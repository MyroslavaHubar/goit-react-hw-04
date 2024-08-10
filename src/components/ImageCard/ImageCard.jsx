// import css from './ImageCard.module.css'

function ImageCard({ small, description, regular, openModal }) {
  return (
    <div>
      <img
        src={small}
        alt={description}
        onClick={() => openModal(regular, description)}
      />
    </div>
  );
}

export default ImageCard;
