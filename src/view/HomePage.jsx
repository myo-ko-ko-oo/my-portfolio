import React from "react";
import myImage from "../assets/image/my-image.jpg";

const HomePage = () => {
  return (
    <>
      <div className="mt-10 pt-16 justify-center h-screen   font-semibold bg-gray-50 dark:text-white dark:bg-gray-900">
        <img src={myImage} className="profile-image" alt="profile-Img" />
        <div className="content grid grid-cols-1 md:grid-cols-3  mt-5  ">
          <div className=""></div>
          <div className=" px-14 ">
            <p className="text-gray-600 dark:text-white">Hello! I am</p>
            <h1 className="text-blue-600 dark:text-rose-500 my-3">MYO KO KO OO</h1>
            <h1 className=" text-gray-600 dark:text-white">Web Developer</h1>
          </div>
          <div className=""></div>
        </div>
        <div className="buttons text-center mt-5 ">
            <button className="btn ">contact</button>
            <button className="btn-outline">Resume</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
