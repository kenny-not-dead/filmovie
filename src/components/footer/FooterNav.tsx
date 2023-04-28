import React from "react";
import classes from "./FooterNav.module.scss";
import { FormattedMessage } from "react-intl";
import Aitem from "./footernavitems/Aitem";
import { NavLink } from "react-router-dom";
import { Button } from "../UI/button/Button";
import phone from "./../../static/svgs/phone.svg";
import mail from "./../../static/svgs/mail.svg";
import logo from "./../../static/svgs/logo.svg";

export default function FooterNav() {
  let item = [
    {
      href: "https://corp.ivi.ru/?_gl=1%2Alkzg34%2A_ga%2AMTAyOTM3NDg3NS4xNjc5ODEzNDI3%2A_ga_GETQ4387MJ%2AMTY4MTMyMDA2NC4zLjEuMTY4MTMyOTQzMi41OS4wLjA.",
      id: "aboutcompani",
    },
    {
      href: "https://corp.ivi.ru/career/?_gl=1*lkzg34*_ga*MTAyOTM3NDg3NS4xNjc5ODEzNDI3*_ga_GETQ4387MJ*MTY4MTMyMDA2NC4zLjEuMTY4MTMyOTQzMi41OS4wLjA.#career-vacancy-block",
      id: "vacancy",
    },
    {
      href: "https://www.ivi.ru/pages/beta/",
      id: "beta",
    },
    {
      href: "https://www.ivi.ru/info/partners",
      id: "partners",
    },
    {
      href: "https://corp.ivi.ru/advertisers/?_gl=1*k75pa2*_ga*MTAyOTM3NDg3NS4xNjc5ODEzNDI3*_ga_GETQ4387MJ*MTY4MTMyMDA2NC4zLjEuMTY4MTMyOTQ4Ny40LjAuMA..",
      id: "advertising",
    },
    {
      href: "https://www.ivi.ru/info/agreement",
      id: "agreement",
    },
    {
      href: "https://www.ivi.ru/info/confidential",
      id: "privacy",
    },
    {
      href: "https://www.ivi.ru/info/goryachaya-liniya-komplaens",
      id: "compliance",
    },
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.aboutus}>
        <h4>
          <FormattedMessage id="aboutus" />
        </h4>
        {item.map((item) => (
          <Aitem item={item} key={item.id} />
        ))}
      </div>
      <div className={classes.nav}>
        <h4>
          <FormattedMessage id="sections" />
        </h4>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>

          <NavLink to={"/"}>
            <FormattedMessage id="main" />
          </NavLink>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-film"
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
          </svg>
          <NavLink to={"/movies"}>
            <FormattedMessage id="films" />
          </NavLink>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-tv"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
          </svg>
          <a href="https://www.ivi.ru/tvplus">TV+</a>
        </div>
      </div>
      <div className={classes.support}>
        <h4>
          <FormattedMessage id="support" />
        </h4>
        <p>
          <FormattedMessage id="supportp1" /> <br />{" "}
          <FormattedMessage id="supportp2" />
        </p>
        <div className={classes.btnwrapper}>
          <Button id="message" />
          <div className={classes.minibtnwrapper}>
            <Button src={mail} />
            <Button src={phone} />
          </div>
        </div>
        <a href="https://ask.ivi.ru/?_gl=1*1bzh0p4*_ga*MTAyOTM3NDg3NS4xNjc5ODEzNDI3*_ga_GETQ4387MJ*MTY4MTMyMDA2NC4zLjEuMTY4MTMyOTYwNC41OC4wLjA.">
          ask.ivi.ru
        </a>
        <p>
          <FormattedMessage id="answer" />
        </p>
      </div>
      <div className={classes.footerlogo}>
        <a
          href="https://www.ivi.ru/subscribe?redirect_url=%2F"
          className={classes.subscription}
        >
          <img src={logo} alt="" />
          <p>
            <FormattedMessage id="noadvertising" />{" "}
          </p>
        </a>
      </div>
    </div>
  );
}
