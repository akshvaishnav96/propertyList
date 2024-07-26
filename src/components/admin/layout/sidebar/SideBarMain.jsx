import React from "react";
import Paragraph from "../../../Paragraph";
import SideBarMenuItems from "../sidebar/SIdeBarMenuItems";
export default function SideBarMain() {
  let year = new Date().getFullYear();
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <SideBarMenuItems />

        <Paragraph
          text={`Copyright @${year}`}
          className={"mb-14 px-5 py-3 hidden md:block text-center text-xs"}
        />
      
      </div>
    </div>
  );
}
