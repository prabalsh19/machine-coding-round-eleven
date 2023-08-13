import { Card } from "../../components/Card/Card";
import { useAppContext } from "../../context/app-context";

export const Star = () => {
  const { starItem } = useAppContext();
  return (
    <div className="movies">
      {starItem.length === 0 ? (
        <h1>No stared movies yet</h1>
      ) : (
        starItem.map((movie) => <Card key={movie.id} movie={movie} />)
      )}
    </div>
  );
};
