import { Outlet } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </>
  );
}

export default App;
