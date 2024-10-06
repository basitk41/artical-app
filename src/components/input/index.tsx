import React, { FC } from "react";

interface Props {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
const Input: FC<Props> = ({ type = "text", className = "", ...props }) => {
  return (
    <input type={type} className={`form-control ${className}`} {...props} />
  );
};

export default Input;
