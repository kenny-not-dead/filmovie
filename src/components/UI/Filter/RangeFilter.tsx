import React, { useState } from "react";
import secondclasses from "./FilterSelect.module.scss";
import classes from "./RangeFilter.module.scss";
import { Chevrondown } from "../elem/Chevrondown";
import { Chevronup } from "../elem/Chevronup";

export interface RangeFilterProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  name?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export function RangeFilter({
  value = 0,
  min = 0,
  max = 10,
  step = 0,
  label = "",
  name = "",
  onChange = () => {},
}: RangeFilterProps) {
  const [chevron, setChevron] = useState(false);

  const showmenu = () => {
    setChevron((prevChevron) => !prevChevron);
  };

  return (
    <div className={secondclasses.wrapper}>
      <div className={secondclasses.subwrapper} onClick={showmenu}>
        <div>
          <h4>{label}</h4>
          <p> {value == 100000 ? "+" + value : "от" + " " + value} </p>
        </div>
        {chevron ? <Chevronup /> : <Chevrondown />}
      </div>
      {chevron ? (
        <div className={classes.subfilter}>
          <input
            className={classes.range}
            type="range"
            onChange={(e) => {
              onChange(e);
            }}
            min={min}
            max={max}
            step={step}
            value={value}
            name={name}
          ></input>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
