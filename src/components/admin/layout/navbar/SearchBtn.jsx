import React from "react";
import Image from "next/image";

export default function SearchBtn() {
  return (
    <button className="outline-none focus:outline-none" type="submit">
      <Image
        src="/svg/SearchIcon.svg"
        width={20}
        height={20}
        alt="Image not found"
      />
    </button>
  );
}
