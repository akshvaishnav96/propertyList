import Paragraph from "@/components/Paragraph";
import React from "react";
import BoardItem from "@/components/admin/boardPage/BordeItems";

export default function page() {
  const pageData = [
    {
      name: "home",
      svg: "s",
      svgBackgroundColor: "red",
      heading: "heading",
      link: "/admin/board/homeUpdate",
    },
  ];

  return (
    <div>
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="px-3 md:lg:xl:px-40  py-20 bg-opacity-10">
          <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-transparent shadow-xl shadow-neutral-100 border ">
            <BoardItem
              svgBackgroundColor={"red"}
              p1Text={"Home Page"}
              p2Text={"customize home page "}
              svg={"/svg/home.svg"}
            />
            <BoardItem
              svgBackgroundColor={"red"}
              p1Text={"Home Page"}
              p2Text={"customize home page "}
              svg={"/svg/home.svg"}
            />
            <BoardItem
              svgBackgroundColor={"red"}
              p1Text={"Home Page"}
              p2Text={"customize home page "}
              svg={"/svg/home.svg"}
            />
            <BoardItem
              svgBackgroundColor={"red"}
              p1Text={"Home Page"}
              p2Text={"customize home page "}
              svg={"/svg/home.svg"}
            />
            <BoardItem
              svgBackgroundColor={"red"}
              p1Text={"Home Page"}
              p2Text={"customize home page "}
              svg={"/svg/home.svg"}
            />
            <BoardItem
              svgBackgroundColor={"red"}
              p1Text={"Home Page"}
              p2Text={"customize home page "}
              svg={"/svg/home.svg"}
            />
            <BoardItem
              svgBackgroundColor={"red"}
              p1Text={"Home Page"}
              p2Text={"customize home page "}
              svg={"/svg/home.svg"}
            />
            <BoardItem
              svgBackgroundColor={"red"}
              p1Text={"Home Page"}
              p2Text={"customize home page "}
              svg={"/svg/home.svg"}
            />
            <BoardItem
              svgBackgroundColor={"red"}
              p1Text={"Home Page"}
              p2Text={"customize home page "}
              svg={"/svg/home.svg"}
            />
            <BoardItem
              svgBackgroundColor={"red"}
              p1Text={"Home Page"}
              p2Text={"customize home page "}
              svg={"/svg/home.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
