import type { ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "./Spinner";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
  isSpinning?: boolean;
};

const Button = ({
  children,
  fullWidth = false,
  isSpinning = false,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={`flex gap-2 items-center justify-center bg-blue-500/20 hover:bg-blue-500/30 text-blue-500 px-4 py-2 ${
        fullWidth && "w-full"
      }
      disabled:cursor-not-allowed disabled:bg-blue-300/10 disabled:hover:bg-blue-300/10 disabled:text-blue-500/50
      `}
      {...buttonProps}
    >
      {isSpinning && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
