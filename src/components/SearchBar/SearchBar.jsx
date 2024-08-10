import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import css from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") {
      toast("Enter text to search for images", {
        icon: "❌",
        style: {
          borderRadius: "5px",
          background: "black",
          color: "#fff",
        },
      });
    }
    onSubmit(value);
  }

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="bottom-right" reverseOrder={false} />
      </form>
    </header>
  );
}

export default SearchBar;
