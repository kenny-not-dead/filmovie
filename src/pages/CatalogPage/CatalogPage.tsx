import { useEffect, useState } from "react";
import { Poster } from "../../components/poster/Poster";
import classes from "./../MainPage/MainPage.module.scss";
import mainclasses from "./CatalogPage.module.scss";
import { Selectsort } from "../../components/catalog/Selectsort";
import { FilterSelect } from "../../components/UI/Filter/FilterSelect";
import { Input } from "../../components/UI/input/Input";
import search from "./../../static/svgs/search.svg";
import { RangeFilter } from "../../components/UI/Filter/RangeFilter";

export function CatalogPage(props: any) {
  const [catalog, setCatalog] = useState(props.newCatalogData);
  const [selectedSort, setSelectedSort] = useState("like");

  const sortCatalog = (sort: string) => {
    setSelectedSort(sort);
    if (sort === "stars") {
      setCatalog(
        [...catalog].sort((a, b) => a.filmGrade.localeCompare(b.filmGrade))
      );
    } else if (sort === "abc") {
      setCatalog(
        [...catalog].sort((a, b) =>
          a.filmLang[0].filmName.localeCompare(b.filmLang[0].filmName)
        )
      );
    } else if (sort === "like") {
      setCatalog(
        [...catalog].sort((a, b) =>
          a.filmTotalGrade.localeCompare(b.filmTotalGrade)
        )
      );
    } else if (sort === "date") {
      setCatalog(
        [...catalog].sort((a, b) => a.filmDate.localeCompare(b.filmDate))
      );
    }
  };

  //Поиск по режиссеру

  const [valuefind, setValuefind] = useState("");
  const [valuefindActor, setValuefindActor] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.placeholder === "Поиск по режиссёру") {
      setValuefind(e.target.value);
      onFilter();
    } else if (e.target.placeholder === "Поиск по актёру") {
      setValuefindActor(e.target.value);
      onFilter();
    }
  };

  const [activeGenres, setActiveGenres] = useState([]);
  const [activeCountries, setActiveCountries] = useState([]);

  const onFilter = () => {
    let newValue = props.newCatalogData
      .filter((i: any) => {
        for (let y = 0; y < i.genres.length; y++) {
          if (i.genres[y].label.includes(activeGenres)) {
            return true;
          }
        }
      })
      .filter((i: any) => {
        for (let y = 0; y < i.countries.length; y++) {
          if (i.countries[y].label.includes(activeCountries)) {
            return true;
          }
        }
      })
      .filter((i: any) => +i.filmGrade >= rating)
      .filter((i: any) => +i.filmTotalGrade >= score);

    if (valuefind.length !== 0 || valuefindActor.length !== 0) {
      setCatalog(
        newValue
          .filter((item: any) => {
            for (let i = 0; i < item.directors.length; i++) {
              if (
                item.directors[i] //по режиссёрам
                  .toLocaleLowerCase()
                  .includes(valuefind.toLocaleLowerCase())
              ) {
                return true;
              }
            }
          })
          .filter((item: any) => {
            for (let i = 0; i < item.actors.length; i++) {
              if (
                item.actors[i] //по актерам
                  .toLocaleLowerCase()
                  .includes(valuefindActor.toLocaleLowerCase())
              ) {
                return true;
              }
            }
          })
      );
    } else {
      setCatalog(newValue);
    }
  };

  useEffect(() => {
    onFilter();
  }, [valuefind, valuefindActor, activeGenres, activeCountries]);

  const [rating, setRating] = useState(7.3);
  const [score, setScore] = useState(1);

  const changeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "rating") {
      setRating(Number(event.target.value));
      onFilter();
    } else if (event.target.name === "score") {
      setScore(Number(event.target.value));
      onFilter();
    }
  };

  const clearfilter = () => {
    setRating(0);
    setScore(0);
    setValuefind("");
    setValuefindActor("");
    setSearchactive(false);
    setSearchactive2(false);
    setActiveGenres([]);
    setActiveCountries([]);
    setCatalog(props.newCatalogData);
  };

  const [searchactive, setSearchactive] = useState(false);
  const [searchactive2, setSearchactive2] = useState(false);

  // поиск по жанрам

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
        <Selectsort
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
      <div className={mainclasses.mainfilterwrapper}>
        <div className={mainclasses.filterwrapper}>
          <FilterSelect
            name="Жанры"
            active={activeGenres}
            setActive={setActiveGenres}
            onFilter={onFilter}
          />
          <FilterSelect
            name=" Страны"
            active={activeCountries}
            setActive={setActiveCountries}
            onFilter={onFilter}
          />
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
          {searchactive ? (
            <div>
              <Input
                placeholder="Поиск по режиссёру"
                id=""
                icon={search}
                value={valuefind}
                onChange={(e) => inputHandler(e)}
              />
            </div>
          ) : (
            <div
              className={mainclasses.searchwrapper}
              onClick={() => {
                setSearchactive((prevSearchactive) => !prevSearchactive);
              }}
            >
              <h4>Поиск по режиссёру</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          )}
          {searchactive2 ? (
            <div>
              <Input
                placeholder="Поиск по актёру"
                id=""
                icon={search}
                value={valuefindActor}
                onChange={(e) => inputHandler(e)}
              />
            </div>
          ) : (
            <div
              className={mainclasses.searchwrapper}
              onClick={() => {
                setSearchactive2((prevSearchactive2) => !prevSearchactive2);
              }}
            >
              <h4>Поиск по актёру</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          )}
        </div>
        <div className={mainclasses.clear} onClick={clearfilter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
          <p>Cбросить фильтры</p>
        </div>
      </div>

      <div className={classes.slider__block}>
        <div className={mainclasses.catalog}>
          {catalog.map((slide: any) => {
            return (
              <Poster
                size="s"
                title={slide.filmLang[0].filmName}
                url={slide.filmPicture}
                score={slide.filmGrade}
                info={slide.filmDate + ", " + slide.countries[0].name}
                seasons={slide.filmLang[0].filmTime}
                key={slide.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
