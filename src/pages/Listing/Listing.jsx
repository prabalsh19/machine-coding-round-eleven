import { useEffect, useState } from "react";
import { useAppContext } from "../../context/app-context";
import "../pages.css";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";
export const Listing = () => {
  const years = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];

  const { db, search } = useAppContext();
  const filterFromLocal = JSON.parse(localStorage.getItem("filter"));
  const [filterState, setFilterState] = useState(
    filterFromLocal || {
      selectedGenre: "all",
      selectedYear: "all",
      selectedRating: "all",
    }
  );
  const { selectedGenre, selectedRating, selectedYear } = filterState;
  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filterState));
  }, [filterState]);
  const updateFilter = (e) => {
    setFilterState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const filterBySearch = (arr) => {
    return arr.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.cast.some((name) =>
          name.toLowerCase().includes(search.toLowerCase())
        ) ||
        item.director.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filterByGenre = (arr) => {
    if (selectedGenre === "all") {
      return arr;
    } else {
      return arr.filter((item) =>
        item.genre.some((genre) => genre === selectedGenre)
      );
    }
  };
  const filterByYear = (arr) => {
    if (selectedYear === "all") {
      return arr;
    } else {
      return arr.filter((item) => item.year == selectedYear);
    }
  };

  const filterByRating = (arr) => {
    if (selectedRating === "all") {
      return arr;
    } else {
      return arr.filter((item) => {
        return item.rating == selectedRating;
      });
    }
  };

  const filters = [filterBySearch, filterByGenre, filterByYear, filterByRating];
  const filteredArray = filters.reduce((acc, cur) => cur(acc), db);

  return (
    <div className="listing">
      <div className="filters">
        <h4>Movies</h4>
        <select
          name="selectedGenre"
          value={selectedGenre}
          onChange={updateFilter}
        >
          <option value="all">All Genre</option>
          <option value="Drama">Drama</option>
          <option value="Crime">Crime</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Biography">Biography</option>
        </select>
        <select
          name="selectedYear"
          value={selectedYear}
          onChange={updateFilter}
        >
          <option value="all">Release Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          name="selectedRating"
          value={selectedRating}
          onChange={updateFilter}
        >
          <option value="all">Rating</option>
          <option value="10">10</option>
          <option value="9">9</option>
          <option value="8">8</option>
          <option value="7">7</option>
          <option value="6">6</option>
          <option value="6">5</option>
          <option value="6">4</option>
          <option value="6">3</option>
          <option value="6">2</option>
          <option value="6">1</option>
        </select>
        <Link to={"/add"}>
          <button>Add a movie</button>
        </Link>
      </div>
      <div className="movies">
        {filteredArray.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
