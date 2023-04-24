import React from "react";
import classes from "./Input.module.scss";

export interface InputProps {
  className?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  icon?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input = ({
  className = classes.input__auth,
  id = "Input",
  type = "text",
  placeholder = "text",
  value = "",
  icon,
  onChange = () => {},
}: InputProps) => {
  return (
    <div className={classes[className] || classes.input__auth}>
      <label className={classes.input__label}>{id}</label>
      <img className={classes.icon} src={icon} alt="" />
      <input
        placeholder={placeholder}
        type={type}
        className={classes.input__field}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        required
      />
    </div>
  );
};
