"use client";

import React from "react";
import Link from "next/link";

export default function Button({ text, href }) {
  return (
    <Link href={href}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded">
        {text}
      </button>
    </Link>
  );
}
