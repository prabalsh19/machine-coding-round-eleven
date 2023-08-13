import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Listing } from "./pages/Listing/Listing.jsx";
import { AppContextProvider } from "./context/app-context.jsx";
import { Wishlist } from "./pages/Wishlist/Wishlist.jsx";
import { Star } from "./pages/Star/Star.jsx";
import { Movie } from "./pages/Movie/Movie.jsx";
import { AddMovie } from "./pages/AddMovie/AddMovie.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Listing /> },
      { path: "wishlist", element: <Wishlist /> },
      {
        path: "star",
        element: <Star />,
      },
      {
        path: "movie/:id",
        element: <Movie />,
      },
      {
        path: "/add",
        element: <AddMovie />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
