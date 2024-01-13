import React from "react";
import { GrNavigate } from "react-icons/gr";
const DrawerNavLink = () => {
  return (
    <>
      <div className="">
        <div className="px-3 pt-5">
          <p><GrNavigate className="me-2 inline text-blue-600 dark:text-rose-500"/>navbar link</p>
        </div>
        <ul className="p-5 ">
          <li className="nav-items ">
            <span className="w-2 h-2 inline-block bg-blue-600 rounded-full me-2 dark:bg-rose-500"></span>
            <a href="" className="">
              home
            </a>
          </li>
          <li className="nav-items">
            <span className="w-2 h-2 inline-block bg-blue-600 rounded-full me-2 dark:bg-rose-500"></span>
            <a href="" className="">
              about
            </a>
          </li>
          <li className="nav-items">
            <span className="w-2 h-2 inline-block bg-blue-600 rounded-full me-2 dark:bg-rose-500"></span>
            <a href="" className="">
              skill
            </a>{" "}
          </li>
          <li className="nav-items">
            <span className="w-2 h-2 inline-block bg-blue-600 rounded-full me-2 dark:bg-rose-500"></span>
            <a href="" className="">
              project
            </a>
          </li>
          <li className="nav-items">
            <span className="w-2 h-2 inline-block bg-blue-600 rounded-full me-2 dark:bg-rose-500"></span>
            <a href="" className="">
              contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DrawerNavLink;
