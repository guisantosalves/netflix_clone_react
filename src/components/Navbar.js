import React, { useEffect, useState } from "react";
import "./css/Navbar.css";

function Navbar(props) {
  const [show, handleShow] = useState(false);
    
  //verifying y-axis of scroll
  useEffect(() => {

    window.addEventListener("scroll", () => {
        
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }

    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
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
