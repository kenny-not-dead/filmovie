import React, { useState } from "react";
import classes from "./FilterSelect.module.scss";
import { Chevronup } from "../elem/Chevronup";
import { Chevrondown } from "../elem/Chevrondown";
import { Subfilter } from "./Subfilter";
import mim from "./../../../static/svgs/mim.png";

interface FilterSelectType {
  name: string;
  active?: Array<string>;
  onFilter: any;
  setActive: any;
}

export function FilterSelect(props: FilterSelectType) {
  const [chevron, setChevron] = useState(false);

  const showmenu = () => {
    setChevron((prevChevron) => !prevChevron);
  };

  let data = [];

  const genres = [
    {
      value: "drama",
      text: "Драма",
    },
    {
      value: "boeviki",
      text: "Боевики",
    },
    {
      value: "comedy",
      text: "Комедия",
    },
    {
      value: "bio",
      text: "Биография",
    },
    {
      value: "scream",
      text: "Ужасы",
    },
  ];

  const country = [
    {
      value: "RU",
      text: "Россия",
    },
    {
      value: "EN",
      text: "Англия",
    },
    {
      value: "FR",
      text: "Франция",
    },
    {
      value: "CH",
      text: "Китай",
    },
    {
      value: "USA",
      text: "США",
    },
  ];

  if (props.name === "Жанры") {
    data = [...genres];
  } else {
    data = [...country];
  }

  const [activeitem, setActiveitem] = useState([]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.subwrapper} onClick={showmenu}>
        <div>
          <h4>{props.name}</h4>
          <p>{activeitem.join(", ")}</p>
        </div>
        {chevron ? <Chevronup /> : <Chevrondown />}
      </div>
      {chevron ? (
        <div className={classes.subfilter}>
          <div className={classes.headfilter}>
            {data
              .filter((item, idx) => idx < 7)
              .map((i) => (
                <Subfilter
                  onFilter={props.onFilter}
                  active={props.active}
                  setActive={props.setActive}
                  value={i.value}
                  text={i.text}
                  logo={mim}
                  className="wrappermini"
                  activeitem={activeitem}
                  setActiveitem={setActiveitem}
                />
              ))}
          </div>
          <div className={classes.secondfilter}>
            {data.map((i) => (
              <Subfilter
                onFilter={props.onFilter}
                active={props.active}
                setActive={props.setActive}
                value={i.value}
                text={i.text}
                className="textlist"
                activeitem={activeitem}
                setActiveitem={setActiveitem}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
