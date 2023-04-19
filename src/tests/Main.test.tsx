import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../components/header/Header";
import { LOCALES } from "../i18n/locales";
import { IntlProvider } from "react-intl";
import { messages } from "../i18n/messages";
import { MainPage } from "../pages/MainPage/MainPage";

describe("render components", () => {
  it("should create main page", () => {
    const mainPage = render(
      <MemoryRouter>
        <IntlProvider
          messages={messages[LOCALES.RUSSIAN]}
          locale={LOCALES.RUSSIAN}
        >
          <MainPage />
        </IntlProvider>
      </MemoryRouter>
    );
    expect(mainPage).toMatchSnapshot();
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

  test("render main slider", () => {
    const title = "Моя пиратская свадьба";
    const description =
      "Пышную свадьбу на острове нарушает вторжение пиратов. Комедия с Дженнифер Лопес и Джошем Дюамелем";
    render(
      <MemoryRouter>
        <IntlProvider
          messages={messages[LOCALES.RUSSIAN]}
          locale={LOCALES.RUSSIAN}
        >
          <MainPage />
        </IntlProvider>
      </MemoryRouter>
    );
    expect(screen.getAllByText(title).length).toBe(4);
    expect(screen.getAllByText(description).length).toBe(4);
    expect(screen.getAllByTestId("poster-l").length).toBe(6);
  });

  test("render buttons", () => {
    render(
      <MemoryRouter>
        <IntlProvider
          messages={messages[LOCALES.RUSSIAN]}
          locale={LOCALES.RUSSIAN}
        >
          <MainPage />
        </IntlProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/30 дней подписки за 1 ₽/i)).toBeInTheDocument();
    expect(screen.getByText(/активировать сертификат/i)).toBeInTheDocument();
  });

  test("render titles", () => {
    render(
      <MemoryRouter>
        <IntlProvider
          messages={messages[LOCALES.RUSSIAN]}
          locale={LOCALES.RUSSIAN}
        >
          <MainPage />
        </IntlProvider>
      </MemoryRouter>
    );
    expect(screen.getAllByTestId("title-container").length).toBe(3);
  });

  test("render slider s", () => {
    render(
      <MemoryRouter>
        <IntlProvider
          messages={messages[LOCALES.RUSSIAN]}
          locale={LOCALES.RUSSIAN}
        >
          <MainPage />
        </IntlProvider>
      </MemoryRouter>
    );
    expect(screen.getAllByTestId("poster-s").length).toBe(8);
  });

  test("render slider m", () => {
    render(
      <MemoryRouter>
        <IntlProvider
          messages={messages[LOCALES.RUSSIAN]}
          locale={LOCALES.RUSSIAN}
        >
          <MainPage />
        </IntlProvider>
      </MemoryRouter>
    );
    expect(screen.getAllByTestId("poster-m").length).toBe(10);
  });
});
