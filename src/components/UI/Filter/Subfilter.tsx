import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Subfilter.module.scss";

interface SubfilterType {
  value: string;
  text: string;
  logo?: any;
}

export function Subfilter(props: SubfilterType) {
  return (
    <>
      <Link to={props.value}>
        <div className={classes.wrapper}>
          {props.logo ? <img src={props.logo} /> : ""}
          <p>{props.text}</p>
        </div>
      </Link>
    </>
  );
}
