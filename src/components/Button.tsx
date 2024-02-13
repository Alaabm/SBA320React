import React from "react";

interface Props {
  type: string;
  children: string;
  className?: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "danger"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button className={"btn btn-outline-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
