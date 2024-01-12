import React from "react";
import ThemeButton from "./ThemeButton";
import AppLogo from "./AppLogo";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar ">
        <div className="left-layer ">
          <AppLogo />
        </div>
        <div className="">
           
          <NavLink />
        </div>
        <div className="right-layer  text-end">
          <ThemeButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
