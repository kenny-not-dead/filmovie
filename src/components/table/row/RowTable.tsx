import classes from "./RowTable.module.scss";
import save from "../../../static/svgs/save.svg";
import del from "../../../static/svgs/delete.svg";
import { useState } from "react";
import Select from "react-select";

interface RowTableProps {
  values: Array<String>;
  deleteItem: any;
  save: any;
}

export function RowTable(props: any) {
  const [formData, setFormData] = useState({
    id: props.values.id,
    name: props.values.filmLang[0].filmName,
    years: props.values.filmDate,
    actors: props.values.actors.map((i: any) => i.name).join(", "),
    genres: props.values.genres.map((i: any) => {
      return { label: i.name, value: i.value };
    }),
    countries: props.values.countries.map((i: any) => {
      return { label: i.name, value: i.value };
    }),
  });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [selectedOptions, setSelectedOptions] = useState(formData.genres);
  const [selectedOptionsCountries, setSelectedOptionsCountries] = useState(
    formData.countries
  );

  const optionList = [
    { value: "drama", label: "Драма" },
    { value: "boeviki", label: "Боевики" },
    { value: "comedy", label: "комедия" },
    { value: "bio", label: "биография" },
  ];

  const optionListCountry = [
    { value: "RU", label: "Россия" },
    { value: "EN", label: "Англия" },
    { value: "FR", label: "Франция" },
    { value: "CH", label: "Китай" },
    { value: "USA", label: "США" },
  ];

  function handleSelect(data: any) {
    setSelectedOptions(data);
  }

  function handleSelectCountries(data: any) {
    setSelectedOptionsCountries(data);
  }

  return (
    <div className={classes.container}>
      <form name="catalog">
        <div className={classes.row}>
          <input
            name="id"
            value={formData.id}
            type="text"
            onChange={handleInputChange}
          />

          <input
            name="name"
            value={formData.name}
            type="text"
            onChange={handleInputChange}
          />

          <input
            name="years"
            value={formData.years}
            type="text"
            onChange={handleInputChange}
          />
          <Select
            options={optionList}
            placeholder="Жанры"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
          <Select
            options={optionListCountry}
            placeholder="Страна"
            value={selectedOptionsCountries}
            onChange={handleSelectCountries}
            isSearchable={true}
          />

          <input name="actors" value={formData.actors} type="text" />
        </div>

        <div className={classes.buttons}>
          <img src={save} alt="save" onClick={(e) => props.save(e, formData)} />
          <img
            src={del}
            alt="delete"
            onClick={(e) => props.deleteItem(e, props.values.id)}
          />
        </div>
      </form>
    </div>
  );
}
