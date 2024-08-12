import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ loadMoreBtn }) {
  return (
    <button type="button" onClick={loadMoreBtn} className={css.loadMoreBtn}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
