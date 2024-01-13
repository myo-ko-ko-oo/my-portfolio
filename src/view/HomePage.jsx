import React from "react";
import myImage from "../assets/image/my-image.jpg";

const HomePage = () => {
  return (
    <>
      <div className="mt-10 pt-16 justify-center h-screen   font-semibold bg-gray-50 dark:text-white dark:bg-gray-900">
        <img src={myImage} className="profile-image" alt="profile-Img" />
        <div className="content grid grid-cols-1 md:grid-cols-3  mt-6  ">
          <div className=""></div>
          <div className="  mx-auto">
            <p className="text-gray-500 dark:text-white">Hello! I am</p>
            <h1 className="text-blue-600 dark:text-rose-500 my-2">
              MYO KO KO OO
            </h1>
            <h1 className=" text-gray-500 dark:text-white">Web Developer</h1>
            <div className="buttons  mt-5 ">
              <button className="btn ">contact</button>
              <button className="btn-outline">Resume</button>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
