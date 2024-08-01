import { memo } from "react";

function InputElem({ type, name, id, placeholder, className, value, func }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
      value={value}
      onChange={(e) => {
        func(e.target.value);
      }}
    />
  );
}

export default memo(InputElem);
