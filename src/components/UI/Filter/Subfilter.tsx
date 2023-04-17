import React from "react";
import { Link } from "react-router-dom";
import classes from "./Subfilter.module.scss";

interface SubfilterType {
  value: any;
}

export function Subfilter(props: SubfilterType) {
  return (
    <>
      <Link to="Sum" className={classes.wrapper}>
        <p>{props.value}</p>
      </Link>
    </>
  );
}
