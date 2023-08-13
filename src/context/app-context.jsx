import { createContext, useContext, useEffect, useState } from "react";
import { movies } from "../db";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const dbFromLocal = JSON.parse(localStorage.getItem("db"));
  const wishlistFromLocal = JSON.parse(localStorage.getItem("wishlist"));
  const starItemFromLocal = JSON.parse(localStorage.getItem("starItem"));
  const [db, setDb] = useState(dbFromLocal || movies);
  const [wishlist, setWishlist] = useState(wishlistFromLocal || []);
  const [starItem, setStarItem] = useState(starItemFromLocal || []);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("db", JSON.stringify(db));
  }, [db]);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  useEffect(() => {
    localStorage.setItem("starItem", JSON.stringify(starItem));
  }, [starItem]);

  const value = {
    db,
    setDb,
    wishlist,
    setWishlist,
    starItem,
    setStarItem,
    search,
    setSearch,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);
