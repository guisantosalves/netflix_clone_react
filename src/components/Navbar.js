import React from "react";

function Navbar(props) {
  return (
    <div className="nav">

      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/NETFLIX_logo.svg/640px-NETFLIX_logo.svg.png"
        alt="netflix logo"
      />

      <img 
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix logo"
      />
    </div>
  );
}

export default Navbar;
