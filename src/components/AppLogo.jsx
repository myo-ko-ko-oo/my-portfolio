import React from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import DrawerNavLink from "./DrawerNavLink";
const AppLogo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex gap-3 ">
        <div className=" block md:hidden mt-2 cursor-pointer">
          <button onClick={toggleDrawer}>
            <RiMenuUnfoldLine className="text-2xl" />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            size={200}
            className="bg-gray-50 dark:bg-gray-800"
          >
            <div><DrawerNavLink/></div>
          </Drawer>
        </div>
        <div className="App-logo cursor-pointer">
          <h2 className="text-gray-500 dark:text-white">
            <span className="text-blue-600 dark:text-rose-500">my</span>{" "}
            portfolio
          </h2>
        </div>
      </div>
    </>
  );
};

export default AppLogo;
