import { useState } from "react";
import { useAppContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";

export const AddMovie = () => {
  const { setDb } = useAppContext();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    year: "",
    cast: "",
    genre: "",
    rating: "",
    director: "",
    writer: "",
    imageURL: "",
  });
  const {
    title,
    summary,
    year,
    cast,
    genre,
    rating,
    director,
    writer,
    imageURL,
  } = formData;
  const updateForm = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setDb((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...formData,
        genre: genre.split(","),
        cast: cast.split(","),
      },
    ]);
    navigate("/");
  };

  return (
    <>
      <h2 className="center">Add Movie</h2>
      <form onSubmit={submitHandler}>
        <div className="add-movie">
          <input
            onChange={updateForm}
            required
            type="text"
            name="title"
            value={title}
            placeholder="Title"
          />
          <br />
          <input
            onChange={updateForm}
            required
            type="text"
            name="summary"
            value={summary}
            placeholder="Summary"
          />
          <br />
          <input
            onChange={updateForm}
            required
            type="number"
            min="1999"
            max="2023"
            name="year"
            value={year}
            placeholder="Year (YYYY)"
          />
          <br />
          <input
            onChange={updateForm}
            required
            type="text"
            name="cast"
            value={cast}
            placeholder="Cast (',' Separated Value)"
          />
          <br />
          <input
            onChange={updateForm}
            required
            type="text"
            name="genre"
            value={genre}
            placeholder="Genre (',' Separated Value)"
          />

          <br />
          <input
            onChange={updateForm}
            required
            type="number"
            placeholder="Rating"
            name="rating"
            value={rating}
            min={1}
            max={10}
          />
          <br />
          <input
            onChange={updateForm}
            required
            type="text"
            value={director}
            name="director"
            placeholder="Director"
          />
          <br />
          <input
            onChange={updateForm}
            required
            type="text"
            name="writer"
            value={writer}
            placeholder="Writer"
          />
          <br />
          <input
            onChange={updateForm}
            required
            type="text"
            name="imageURL"
            value={imageURL}
            placeholder="Image Url"
          />
          <br />
          <button>Add Movie</button>
        </div>
      </form>
    </>
  );
};
