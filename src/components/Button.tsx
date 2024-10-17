import { MouseEventHandler, ReactNode } from "react";

const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 rounded-xl font-semibold text-xs bg-primary"
    >
      {children}
    </button>
  );
};

export default Button;
