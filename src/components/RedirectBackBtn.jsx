"use client"; // Ensure this code is only run on the client side

import { useRouter } from "next/navigation"; // Import useRouter from next/router
import React from "react";

export default function RedirectBackBtn({ text = "Go Back" }) {
  // Added text prop with default value
  const router = useRouter(); // Initialize the router

  const handleClick = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <button
      onClick={handleClick} // Use handleClick on button click
      className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
    >
      {text}
    </button>
  );
}
