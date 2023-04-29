import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Subfilter.module.scss";

interface SubfilterType {
  value: string;
  text: string;
  logo?: any;
  className?: string;
}

export function Subfilter({
  value,
  logo,
  text,
  className = classes.wrapper,
}: SubfilterType) {
  const [active, setActive] = useState(false);

  const activeFilter = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <>
      <Link to={value}>
        <div
          className={classes[className] || classes.wrapper}
          onClick={activeFilter}
        >
          {logo ? <img src={logo} /> : ""}
          <div className={className == "textlist" ? classes.secondwrapper : ""}>
            <p>{text}</p>
            {className == "textlist" ? (
              active ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    </>
  );
}
