import { FC } from "react";

interface Props {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  className?: string;
}
const Button: FC<Props> = ({
  text,
  onClick,
  type = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${type} ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
