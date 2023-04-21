import { useEffect, useState } from "react";
import { Poster } from "../../components/poster/Poster";
import classes from "./../MainPage/MainPage.module.scss";
import mainclasses from "./CatalogPage.module.scss";
import { Select } from "../../components/catalog/Select";
import { FilterSelect } from "../../components/UI/Filter/FilterSelect";
import { Input } from "../../components/UI/input/Input";
import search from "./../../static/svgs/search.svg";
import { RangeFilter } from "../../components/UI/Filter/RangeFilter";

export function CatalogPage() {
  const posters = [
    {
      title: "Губка боб",
      url: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
      score: "7,9",
      info: "1999-2021, США, Фентези",
      seasons: "13 сезонов",
    },
    {
      title: "Титаник",
      url: "https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85",
      score: "8,6",
      info: "2012, Россия, Документальные",
      seasons: "1 сезон",
    },
    {
      title: "Друзья",
      url: "https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85",
      score: "9,1",
      info: "1994-2004, США, Комедийные",
      seasons: "10 сезонов",
    },
    {
      title: "Губка боб",
      url: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
      score: "7,9",
      info: "1999-2021, США, Фентези",
      seasons: "13 сезонов",
    },
    {
      title: "Титаник",
      url: "https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85",
      score: "8,6",
      info: "2012, Россия, Документальные",
      seasons: "1 сезон",
    },
    {
      title: "Друзья",
      url: "https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85",
      score: "9,1",
      info: "1994-2004, США, Комедийные",
      seasons: "10 сезонов",
    },
    {
      title: "Титаник",
      url: "https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85",
      score: "8,6",
      info: "2012, Россия, Документальные",
      seasons: "1 сезон",
    },
    {
      title: "Друзья",
      url: "https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85",
      score: "9,1",
      info: "1994-2004, США, Комедийные",
      seasons: "10 сезонов",
    },
  ];

  const [catalog, setCatalog] = useState(posters);
  const [selectedSort, setSelectedSort] = useState("like");

  const sortCatalog = (sort: string) => {
    setSelectedSort(sort);
    if (sort === "stars") {
      setCatalog([...catalog].sort((a, b) => a.score.localeCompare(b.score)));
    } else if (sort === "abc") {
      setCatalog([...catalog].sort((a, b) => a.title.localeCompare(b.title)));
    }
  };

  //Поиск по режиссеру

  const [valuefind, setValuefind] = useState("");
  const [valuefindActor, setValuefindActor] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.placeholder == "Поиск по режиссёру") {
      setValuefind(e.target.value);
      onFilter();
    } else if (e.target.placeholder == "Поиск по актёру") {
      setValuefindActor(e.target.value);
      onFilter();
    }
  };

  const onFilter = () => {
    let newValue = posters;

    if (valuefind.length != 0 || valuefindActor.length != 0) {
      setCatalog(
        newValue
          .filter((item) => {
            if (
              item.title
                .toLocaleLowerCase()
                .includes(valuefind.toLocaleLowerCase())
            ) {
              return true;
            }
          })
          .filter((item) => {
            if (
              item.seasons
                .toLocaleLowerCase()
                .includes(valuefindActor.toLocaleLowerCase())
            ) {
              return true;
            }
          })
      );
    } else {
      setCatalog(newValue);
    }
  };

  useEffect(() => {
    onFilter();
  }, [valuefind, valuefindActor]);

  const [rating, setRating] = useState(7.3);
  const [score, setScore] = useState(1);

  const changeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "rating") {
      setRating(Number(event.target.value));
    } else if (event.target.name == "score") {
      setScore(Number(event.target.value));
      //добавить onFilter
    }
  };

  return (
    <>
      <div className={mainclasses.sortwrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-filter-right"
          viewBox="0 0 16 16"
        >
          <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
        </svg>
        <Select
          sortCatalog={sortCatalog}
          value={selectedSort}
          option={[
            { value: "", name: "Сортировать", disabled: true },
            { value: "like", name: "По количеству оценок" },
            { value: "stars", name: "По рейтингу" },
            { value: "date", name: "По дате выхода" },
            { value: "abc", name: "По алфавиту" },
          ]}
        />
      </div>
      <div className={mainclasses.filterwrapper}>
        <FilterSelect name="Жанры" value="Ужасы" />
        <FilterSelect name=" Страны" value="Россия" />
        <RangeFilter
          label="Рейтинг"
          value={rating}
          onChange={(e) => changeRating(e)}
          min={0}
          max={10}
          step={0.1}
          name="rating"
        />
        <RangeFilter
          label="Количество оценок"
          value={score}
          onChange={(e) => changeRating(e)}
          min={0}
          max={100000}
          step={1000}
          name="score"
        />
      </div>
      <div className={mainclasses.inputfilterwrapper}>
        <Input
          placeholder="Поиск по режиссёру"
          id=""
          icon={search}
          value={valuefind}
          onChange={(e) => inputHandler(e)}
        />
        <Input
          placeholder="Поиск по актёру"
          id=""
          icon={search}
          value={valuefindActor}
          onChange={(e) => inputHandler(e)}
        />
      </div>
      <div className={classes.slider__block}>
        <div className={mainclasses.catalog}>
          {catalog.map((slide, index) => {
            return (
              <Poster
                size="s"
                title={slide.title}
                url={slide.url}
                score={slide.score}
                info={slide.info}
                seasons={slide.seasons}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
