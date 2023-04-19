import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../components/header/Header";
import { LOCALES } from "../i18n/locales";
import { IntlProvider } from "react-intl";
import { messages } from "../i18n/messages";
import { ActorPage } from "../pages/ActorPage/ActorPage";

describe("render components", () => {
  it("should create main page", () => {
    const actorPage = render(
      <MemoryRouter>
        <IntlProvider
          messages={messages[LOCALES.RUSSIAN]}
          locale={LOCALES.RUSSIAN}
        >
          <ActorPage />
        </IntlProvider>
      </MemoryRouter>
    );
    expect(actorPage).toMatchSnapshot();
  });

  test("render header", () => {
    render(
      <MemoryRouter>
        <IntlProvider
          messages={messages[LOCALES.RUSSIAN]}
          locale={LOCALES.RUSSIAN}
        >
          <Header
            currentLocale={LOCALES.RUSSIAN}
            hangeChange={() => {
              return {};
            }}
          />
        </IntlProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/главная/i)).toBeInTheDocument();
    expect(screen.getByText(/фильмы/i)).toBeInTheDocument();
    expect(screen.getByText(/админка/i)).toBeInTheDocument();
    expect(screen.getByText(/войти/i)).toBeInTheDocument();
  });

  test("render actor info", () => {
    const name = "Сергей Бурунов";
    const nameEnglish = "Sergey Burunov";

    render(
      <MemoryRouter>
        <IntlProvider
          messages={messages[LOCALES.RUSSIAN]}
          locale={LOCALES.RUSSIAN}
        >
          <ActorPage />
        </IntlProvider>
      </MemoryRouter>
    );
    expect(screen.getAllByText(name).length).toBe(14);
    expect(screen.getAllByText(nameEnglish).length).toBe(14);
  });

  test("render buttons", () => {
    render(
      <MemoryRouter>
        <IntlProvider
          messages={messages[LOCALES.RUSSIAN]}
          locale={LOCALES.RUSSIAN}
        >
          <ActorPage />
        </IntlProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/Смотреть/i)).toBeInTheDocument();
  });
});
