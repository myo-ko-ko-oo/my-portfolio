import React from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";

const AppLogo = () => {
  return (
    <>
      <div className="flex gap-3 ">
        <div className=" block md:hidden mt-2 cursor-pointer">
          <RiMenuUnfoldLine className="text-2xl" />
        </div>
        <div className="App-logo cursor-pointer">
          <h2 className="text-gray-600 dark:text-white"><span className="text-blue-600 dark:text-rose-500">my</span> portfolio</h2>
        </div>
      </div>
    </>
  );
};

export default AppLogo;
