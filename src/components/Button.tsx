import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="py-2 px-4 rounded-xl font-semibold text-xs bg-primary">
      {children}
    </button>
  );
};

export default Button;
