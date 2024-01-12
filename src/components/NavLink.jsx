import React from "react";
import AppLogo from "./AppLogo";

const NavLink = () => {
  return (
    <>
      <div className="hidden md:block">
        <ul className=" nav-link">
          <li className="nav-items">home</li>
          <li className="nav-items">about</li>
          <li className="nav-items">skill</li>
          <li className="nav-items">project</li>
          <li className="nav-items">contact</li>
        </ul>
      </div>
    </>
  );
};

export default NavLink;
