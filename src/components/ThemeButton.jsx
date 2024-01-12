import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdNightlightRound } from "react-icons/md";
import useTheme from "../context/ThemeContex";
const ThemeButton = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleBtn = (e) => {
  const themeModeStatus = e.currentTarget.checked;
  console.log(themeModeStatus);
 if(themeModeStatus){
    lightTheme();
 }else{
    darkTheme();
 }
  };

  return (
    <>
      <div className="">
        <button onClick={toggleBtn} checked={themeMode==="dark"} type="button"className="text-2xl text-pretty">
            {themeMode === "dark" ? (<span >
            <HiOutlineLightBulb className="dark:text-yellow-300" />
          </span>):( <span >
            <MdNightlightRound className="text-blue-600"/>
          </span>)}
          
         
        </button>
      </div>
    </>
  );
};

export default ThemeButton;
