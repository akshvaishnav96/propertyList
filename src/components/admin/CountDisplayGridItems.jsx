
import React from "react";
import Image from "next/image";

export default function CountDisplayGridItems({ src, count, text }) {
  return (
    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <Image src={src} width={30} height={30} alt="not found" />
      </div>
      <div className="text-right">
        <p className="text-2xl">{count}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
