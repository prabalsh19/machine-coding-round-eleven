import { NavLink } from "react-router-dom";
import "../components.css";
import { useAppContext } from "../../context/app-context";

export const Nav = () => {
  const { search, setSearch } = useAppContext();
  return (
    <nav>
      <h1>IMDB</h1>
      <input
        className="search"
        type="text"
        name=""
        id=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movies by title,cast and director"
      />
      <div className="navlinks">
        <NavLink to={"/"}>Movies</NavLink>
        <NavLink to={"/wishlist"}>Watch List</NavLink>
        <NavLink to={"/star"}>Starred Movies</NavLink>
      </div>
    </nav>
  );
};
