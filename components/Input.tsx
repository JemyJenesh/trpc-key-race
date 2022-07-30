import type { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="w-full bg-gray-100 px-2 py-1.5 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 mb-3"
      {...props}
    />
  );
};

export default Input;
