import React from "react";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";

export default function BordeItems({
  svgBackgroundColor,
  svg,
  p1Text,
  p2Text,
}) {
  return (
    <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer bg-white">
      <span
        className={`p-5 rounded-full bg-${svgBackgroundColor}-500 text-white shadow-lg shadow-${svgBackgroundColor}-200`}
      >
        <Image
          src={svg}
          width={40}
          height={40}
          alt={`${p1Text} icon`}
          style={{ filter: "invert(1)" }}
        />
      </span>

      <Paragraph
        className={"text-xl font-medium text-slate-700 mt-3"}
        text={p1Text}
      />
      <Paragraph className={"mt-2 text-sm text-slate-500"} text={p2Text} />
    </div>
  );
}
