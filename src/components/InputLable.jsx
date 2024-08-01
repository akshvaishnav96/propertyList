import React from "react";

export default function InputLable({ lablefor, text }) {
  return (
    <label htmlFor={lablefor} className="block text-gray-600">
      {text}
    </label>
  );
}
