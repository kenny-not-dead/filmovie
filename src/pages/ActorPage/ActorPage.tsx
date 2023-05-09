import { useState } from "react";
import classes from "./ActorPage.module.scss";
import Point from "../../components/UI/elem/Point";
import { Button } from "../../components/UI/button/Button";
import { Title } from "../../components/title/Title";
import { TextShow } from "../../components/UI/text/Textshow";

let actors = [
  {
    id: 117,
    actorLink: "https://www.kinopoisk.ru//name/37859/",
    actorPicture:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/9c33caef-be28-4257-b7ed-a407698f1a32/280x420",
    actorLang: [
      {
        id: 117,
        actorId: 117,
        lang: "ru",
        actorName: "Леонардо ДиКаприо",
        career: "Актер,  Продюсер,  Сценарист",
        birthPlace: "Голливуд, Лос-Анджелес, Калифорния, США",
        birthDate: "11 ноября, 1974 Скорпион 48 лет",
        height: "1.83 м",
      },
    ],
    films: [
      {
        id: 3,
        name: "Волк с Уолл-стрит",
      },
      {
        id: 8,
        name: "Начало",
      },
    ],
  },
];

// <TextShow number={150} text={actors[0].text} />

/*
  {actors[0].films.map((item) => (
            <div className={classes.listitem}>
              <img src={item.url} alt="Poster" />
              <div className={classes.infolistwrapper}>
                <h3>{item.title}</h3>
                <p>{item.years}</p>
                <p>Рейтинг Кинопоиск: {item.score}</p>
              </div>
              <div className={classes.buttonwrapper}>
                <Button id="Смотреть" />
              </div>
            </div>
          ))}
*/

//        <TextShow number={300} text={actors[0].bio} />
export function ActorPage() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.infowrapper}>
          <img src={actors[0].actorPicture} alt="Photo" />
          <div className={classes.infowrapperall}>
            <h2>{actors[0].actorLang[0].actorName}</h2>
            <p>{actors[0].actorLang[0].actorName}</p>
            <div className={classes.minibiowrapper}>
              <div>
                <h4>Карьера: </h4>
                <p>{actors[0].actorLang[0].career}</p>
              </div>
              <div>
                <h4>Родился: </h4>
                <p>{actors[0].actorLang[0].birthDate}</p>
              </div>
              <div>
                <h4>Рост: </h4>
                <p>{actors[0].actorLang[0].height}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.nav}>
          <a href="#film">{actors[0].films.length} фильма</a>
          <Point />
          <a href="#bio">Биография</a>
        </div>
        <div id="film">
          <div className={classes.listlabel}>
            <Title arrow={false} title={"Полная фильмография"} />
            <p>{actors[0].films.length} фильма</p>
          </div>

          <div className={classes.bioWrapper} id="bio">
            <Title arrow={false} title={"Биография"} />
          </div>
        </div>
      </div>
    </>
  );
}
