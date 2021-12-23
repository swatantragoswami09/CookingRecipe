import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { color, changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor("black")}>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;
