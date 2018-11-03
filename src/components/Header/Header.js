import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Shelfie</h1>
      <div className="nav-links">
        <Link to="/" className="links">
          Dashboard
        </Link>
        <Link to="/add" className="links">
          Add New Product
        </Link>
      </div>
    </div>
  );
};

export default Header;
