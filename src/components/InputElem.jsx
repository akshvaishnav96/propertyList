import React, { memo } from "react";

function Input({ type, name, id, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
    />
  );
}

export default memo(Input);
