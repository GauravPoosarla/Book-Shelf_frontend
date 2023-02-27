import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="horizontal-rule">
        <hr />
        <hr />
      </div>
      <div className="logo-class">
        <div className="logo">
          <div className="logo-text">BS</div>
        </div>
        <h1>The Book Shelf</h1>
      </div>
    </div>
  );
};

export default Header;
