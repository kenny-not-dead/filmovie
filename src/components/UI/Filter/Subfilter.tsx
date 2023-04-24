import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Subfilter.module.scss";

interface SubfilterType {
  value: any;
  link: string;
  path: string[];
}

// в Массив попадает згначение, но не отображается в пути
export function Subfilter(props: SubfilterType) {
  const linkTo = (e: any) => {
    props.path.push(e.target.id);
    <Link to={props.path.join("+")} />;
  };

  useEffect(() => {}, [props.path]);
  return (
    <>
      <Link to={props.path.join("+")}>
        <p id={props.link} onClick={(e) => linkTo(e)}>
          {props.value}
        </p>
      </Link>
    </>
  );
}
