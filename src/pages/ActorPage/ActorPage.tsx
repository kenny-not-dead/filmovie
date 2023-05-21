import { useState } from "react";
import classes from "./ActorPage.module.scss";
import Point from "../../components/UI/elem/Point";
import { Button } from "../../components/UI/button/Button";
import { Title } from "../../components/title/Title";
import { TextShow } from "../../components/UI/text/Textshow";
import { Link } from "react-router-dom";

let actors = [
  {
    id: 21495,
    personLink: "https://www.kinopoisk.ru/name/21495/",
    personPicture:
      "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/21495.jpg",
    personGender: "MALE",
    height: 183,
    age: 48,
    birthDate: "1974-01-30",
    personLang: [
      {
        lang: "ru",
        personName: "Кристиан Бэйл",
        career: "Актер, Продюсер",
        birthPlace: "Хаверфордвест, Пембрукшир, Уэльс, Великобритания",
      },
      {
        lang: "en",
        personName: "Christian Bale",
        career: null,
        birthPlace: null,
      },
    ],
    films: [
      {
        id: 309,
        name: "Эквилибриум",
        year: 2002,
        rating: 7.9,
        poster: "https://kinopoiskapiunofficial.tech/images/posters/kp/309.jpg",
      },
      {
        id: 309,
        name: "Бетмен",
        year: 2012,
        rating: 8.9,
        poster: "https://kinopoiskapiunofficial.tech/images/posters/kp/309.jpg",
      },
    ],
  },
];

// <TextShow number={150} text={actors[0].text} />

//        <TextShow number={300} text={actors[0].bio} />
export function ActorPage() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.infowrapper}>
          <img src={actors[0].personPicture} alt="Photo" />
          <div className={classes.infowrapperall}>
            <h2>{actors[0].personLang[0].personName}</h2>
            <p>
              {actors[0].personLang[1].personName}, {actors[0].age} лет
            </p>
            <div className={classes.minibiowrapper}>
              <div>
                <h4>Карьера: </h4>
                <p>{actors[0].personLang[0].career}</p>
              </div>
              <div>
                <h4>Родился: </h4>
                <p>{actors[0].birthDate}</p>
              </div>
              <div>
                <h4>Рост: </h4>
                <p>{actors[0].height} см.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.nav}>
          <a href="#film">{actors[0].films.length} фильма</a>
        </div>
        <div id="film">
          <div className={classes.listlabel}>
            <Title arrow={false} title={"Полная фильмография"} />
            <p>{actors[0].films.length} фильма</p>
          </div>
          {actors[0].films.map((item) => (
            <div className={classes.listitem}>
              <img src={item.poster} alt="Poster" />
              <div className={classes.infolistwrapper}>
                <h3>{item.name}</h3>
                <p>{item.year}</p>
                <p>Рейтинг Кинопоиск: {item.rating}</p>
              </div>
              <div className={classes.buttonwrapper}>
                <Link to={"/catalog/1"}>
                  <Button id="Смотреть" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
