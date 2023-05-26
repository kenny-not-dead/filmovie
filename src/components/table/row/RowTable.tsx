import classes from "./RowTable.module.scss";
import save from "../../../static/svgs/save.svg";
import del from "../../../static/svgs/delete.svg";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import { removeFilm, updateFilm } from "../../../store/slices/filmSlice";

interface RowTableProps {
  film: Film;
}

export function RowTable({ film }: RowTableProps) {
  const formDataObj = {
    id: film.id,
    name: film.filmLang[0].filmName,
    years: film.filmDate,
    actors: film.actors.map((i: any) => i).join(", "),
    genres: film.genres.map((i: any) => {
      return { id: i.id, label: i.label, value: i.value };
    }),
    countries: film.countries.map((i: any) => {
      return { id: i.id, label: i.label, value: i.value };
    }),
  };
  const [formData, setFormData] = useState(formDataObj);
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [selectedOptions, setSelectedOptions] = useState(formData.genres);
  const [selectedOptionsCountries, setSelectedOptionsCountries] = useState(
    formData.countries
  );

  useEffect(() => {
    setFormData(formDataObj);
  }, [film]);

  const optionList = [
    { id: 1, value: "drama", label: "Драма" },
    { id: 4, value: "boeviki", label: "Боевики" },
    { id: 2, value: "comedy", label: "Комедия" },
    { id: 3, value: "bio", label: "Биография" },
  ];

  const optionListCountry = [
    { id: 1, value: "RU", label: "Россия" },
    { id: 2, value: "EN", label: "Англия" },
    { id: 3, value: "FR", label: "Франция" },
    { id: 4, value: "CH", label: "Китай" },
    { id: 5, value: "USA", label: "США" },
  ];

  function handleSelect(data: any) {
    setSelectedOptions(data);
    setFormData({ ...formData, genres: data });
  }

  function handleSelectCountries(data: any) {
    setSelectedOptionsCountries(data);
    setFormData({ ...formData, actors: data });
  }

  const dispatch = useAppDispatch();

  return (
    <div className={classes.container}>
      <form name="catalog">
        <div className={classes.row}>
          <input
            className={classes.id}
            name="id"
            value={formData.id}
            type="text"
            onChange={handleInputChange}
          />

          <input
            className={classes.name}
            name="name"
            value={formData.name}
            type="text"
            onChange={handleInputChange}
          />

          <input
            className={classes.year}
            name="years"
            value={formData.years}
            type="text"
            onChange={handleInputChange}
          />
          <Select
            className={classes.genre}
            options={optionList}
            placeholder="Жанры"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
          <Select
            className={classes.country}
            options={optionListCountry}
            placeholder="Страна"
            value={selectedOptionsCountries}
            onChange={handleSelectCountries}
            isSearchable={true}
          />

          <input
            className={classes.actors}
            name="actors"
            value={formData.actors}
            onChange={() => {}}
            type="text"
          />
        </div>

        <div className={classes.buttons}>
          <img
            src={save}
            alt="save"
            onClick={() => {
              dispatch(
                updateFilm({
                  film: formData,
                })
              );
            }}
          />
          <img
            src={del}
            alt="delete"
            onClick={() => {
              dispatch(
                removeFilm({
                  film: formData,
                })
              );
            }}
          />
        </div>
      </form>
    </div>
  );
}
