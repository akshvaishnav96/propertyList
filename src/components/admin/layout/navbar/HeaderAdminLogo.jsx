import Image from "next/image";
import React from "react";

export default function HeaderAdminLogo({ imageUrl, text }) {
  return (
    <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
      <Image
        className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
        src={imageUrl}
        width={20}
        height={20}
        alt="image not found"
      />
      <span className="hidden md:block">{text}</span>
    </div>
  );
}
