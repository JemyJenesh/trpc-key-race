import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-500 px-4 py-2">
      {children}
    </button>
  );
};

export default Button;
