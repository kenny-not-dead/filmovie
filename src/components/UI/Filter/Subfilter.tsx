import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Subfilter.module.scss";

interface SubfilterType {
  value: string;
  text: string;
  logo?: any;
  className?: string;
  activeitem?: Array<string>;
  setActiveitem?: any;
  active?: any;
  onFilter?: any;
  setActive?: any;
}

export function Subfilter({
  onFilter,
  active,
  setActive,
  value,
  logo,
  text,
  className = classes.wrapper,
  activeitem = [],
  setActiveitem,
}: SubfilterType) {
  const [actives, setActives] = useState(false);

  const activeFilter = (el: any) => {
    if (active) {
      setActives((prevActives) => !prevActives);
      if (!activeitem.includes(el.target.textContent)) {
        activeitem.push(el.target.textContent);
        active.push(el.target.textContent);
      } else {
        setActiveitem(
          activeitem.filter((item) => item !== el.target.textContent)
        );
        setActive(active.filter((item: any) => item !== el.target.textContent));
      }
      onFilter();
    }
  };

  useEffect(() => {}, [activeitem]);

  return (
    <>
      <Link to={value}>
        <div
          className={classes[className] || classes.wrapper}
          onClick={activeFilter}
        >
          {logo ? <img src={logo} /> : ""}
          <div
            className={className === "textlist" ? classes.secondwrapper : ""}
          >
            <p>{text}</p>
            {className === "textlist" ? (
              actives ? (
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
