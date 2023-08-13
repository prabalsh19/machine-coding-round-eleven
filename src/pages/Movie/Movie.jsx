import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/app-context";

export const Movie = () => {
  const { id } = useParams();
  const { db, setWishlist, setStarItem, wishlist, starItem } = useAppContext();
  const selectedMovie = db.find((item) => item.id == id);
  const addToWishlist = (movie) => {
    setWishlist((prev) => [...prev, movie]);
  };
  const removeFromWishlist = (movie) => {
    setWishlist((prev) => prev.filter((item) => item.id !== movie.id));
  };
  const addToStar = (movie) => {
    setStarItem((prev) => [...prev, movie]);
  };
  const removeFromStar = (movie) => {
    setStarItem((prev) => prev.filter((item) => item.id !== movie.id));
  };
  const isWishlisted = wishlist.some((item) => item.id == id);
  const isStarred = starItem.some((item) => item.id == id);
  return (
    <div>
      {selectedMovie.id && (
        <div className="horizontal-card">
          <img src={selectedMovie.imageURL} alt="" />
          <div className="movie-details">
            <h3>{selectedMovie.title}</h3>
            <p>{selectedMovie.summary}</p>
            <p>Year: {selectedMovie.year}</p>
            <p>Genre: {selectedMovie.genre.join(",")}</p>
            <p>Rating: {selectedMovie.rating}</p>
            <p>Director: {selectedMovie.director}</p>
            <p>Writer: {selectedMovie.writer}</p>
            <p>Cast: {selectedMovie.cast}</p>
            <div className="card-buttons">
              {isStarred ? (
                <button onClick={() => removeFromStar(selectedMovie)}>
                  Unstar
                </button>
              ) : (
                <button onClick={() => addToStar(selectedMovie)}>Star</button>
              )}

              {isWishlisted ? (
                <button onClick={() => removeFromWishlist(selectedMovie)}>
                  Remove from Wishlist
                </button>
              ) : (
                <button onClick={() => addToWishlist(selectedMovie)}>
                  Add To Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
