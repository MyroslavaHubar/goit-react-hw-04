import css from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return (
    <div>
      <p className={css.errorMessage}>{message}</p>
    </div>
  );
}
