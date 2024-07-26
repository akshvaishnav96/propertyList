"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ListItemName({ href, name, src }) {
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 border-l-4  text-white-600 hover:text-white-800    dark:hover:border-gray-800 ${
          pathName === href ? "border-yellow-300 " : "border-transparent"
        }`}
      >
        <span className="inline-flex justify-center items-center ml-4 mr-2">
          <Image
            src={src}
            width={20}
            height={20}
            style={{ filter: "invert(1)", minWidth: "23px" }}
            alt="image not found"
          />
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">{name}</span>
      </Link>
    </li>
  );
}
