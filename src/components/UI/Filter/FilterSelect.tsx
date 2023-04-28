import React, { useEffect, useState } from "react";
import classes from "./FilterSelect.module.scss";
import { Subfilter } from "./Subfilter";
import { Chevronup } from "../elem/Chevronup";
import { Chevrondown } from "../elem/Chevrondown";
import { Link } from "react-router-dom";

interface FilterSelectType {
  name: string;
  value?: string;
}

export function FilterSelect(props: FilterSelectType) {
  const [path, setPath] = useState(["test"]); //test

  const [chevron, setChevron] = useState(false);

  const showmenu = () => {
    setChevron((prevChevron) => !prevChevron);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.subwrapper} onClick={showmenu}>
        <div>
          <h4>{props.name}</h4>
          <p>{props.value}</p>
        </div>
        {chevron ? <Chevronup /> : <Chevrondown />}
      </div>
      {chevron ? <div className={classes.subfilter}></div> : ""}
    </div>
  );
}
