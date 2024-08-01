import React from "react";

export default function FormSubmitBtn({ text }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      {text}
    </button>
  );
}
