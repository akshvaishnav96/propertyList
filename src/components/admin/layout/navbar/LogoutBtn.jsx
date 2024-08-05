"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LogoutBtn({ text }) {
  const router = useRouter();
  async function logoutHandler() {
    let res = await fetch("/api/logout", { method: "POST" });
    let data = await res.json();

    if (data.status) router.refresh();
  }

  return (
    <div
      onClick={logoutHandler}
      className="flex items-center mr-4 hover:text-blue-100"
    >
      <span className="inline-flex mr-1">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
      </span>
      {text}
    </div>
  );
}
