import { Link } from "react-router-dom";
import { useAppContext } from "../../context/app-context";

/* eslint-disable react/prop-types */
export const Card = ({ movie }) => {
  const { wishlist, setWishlist, starItem, setStarItem } = useAppContext();
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
  const isWishlisted = wishlist.some((item) => item.id === movie.id);
  const isStarred = starItem.some((item) => item.id === movie.id);
  return (
    <div className="card">
      <Link to={"/movie/" + movie.id}>
        <img src={movie.imageURL} alt="" />
        <h3>{movie.title}</h3>
        <p>{movie.summary}</p>
      </Link>
      <div className="card-buttons">
        {isStarred ? (
          <button onClick={() => removeFromStar(movie)}>Unstar</button>
        ) : (
          <button onClick={() => addToStar(movie)}>Star</button>
        )}

        {isWishlisted ? (
          <button onClick={() => removeFromWishlist(movie)}>
            Remove from Wishlist
          </button>
        ) : (
          <button onClick={() => addToWishlist(movie)}>Add To Wishlist</button>
        )}
      </div>
    </div>
  );
};
