import { Card } from "../../components/Card/Card";
import { useAppContext } from "../../context/app-context";

export const Wishlist = () => {
  const { wishlist } = useAppContext();
  return (
    <div className="movies">
      {wishlist.length === 0 ? (
        <h1>No wishlist yet</h1>
      ) : (
        wishlist.map((movie) => <Card key={movie.id} movie={movie} />)
      )}
    </div>
  );
};
