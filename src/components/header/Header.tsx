import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import logo from "./../../static/svgs/logo.svg";
import { LOCALES } from "../../i18n/locales";

interface SubfilterType {
  currentLocale: any;
  hangeChange: () => {};
}

export function Header(props: SubfilterType) {
  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Русский", code: LOCALES.RUSSIAN },
  ];

  return (
    <header className={classes.container}>
      <div>
        <img src={logo} alt="Kinogramm" />
        <nav>
          <NavLink to={"/"}>
            <FormattedMessage id="main" />
          </NavLink>
          <NavLink to={"/catalog"}>
            <FormattedMessage id="films" />
          </NavLink>
          <NavLink to={"/admin"}>
            <FormattedMessage id="admin" />
          </NavLink>
        </nav>
      </div>
      <NavLink to={"/auth"}>
        <FormattedMessage id="auth" />
      </NavLink>
      <div className={classes.switcher}>
        <select onChange={props.hangeChange} value={props.currentLocale}>
          {languages.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
