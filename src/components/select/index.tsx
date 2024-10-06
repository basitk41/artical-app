import React, { FC } from "react";

interface Props {
  className?: string;
  value: string;
  options: { id: string; value: string; title: string }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select: FC<Props> = ({
  options = [],
  value,
  className = "",
  onChange,
  ...props
}) => {
  return (
    <select
      className="form-select"
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((item) => (
        <option disabled={!item.value} key={item.id} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
