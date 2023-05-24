import React from "react";
import classes from "./Select.module.scss";

interface SelectProps {
  option: Option[];
  value: string;
  sortCatalog: (arg: string) => void;
}

type Option = {
  value: string;
  name: string;
  disabled?: boolean;
};

export function Selectsort(props: SelectProps) {
  return (
    <div className={classes.wrapper}>
      <select
        className={classes.select}
        value={props.value}
        onChange={(event) => props.sortCatalog(event.target.value)}
      >
        {props.option.map((option) => (
          <option
            className={classes.option}
            key={option.value}
            value={option.value}
            disabled={option.disabled ? true : false}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
