import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainPage } from "./pages/MainPage/MainPage";
import { FilmPage } from "./pages/FilmPage/FilmPage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { ActorPage } from "./pages/ActorPage/ActorPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { useState } from "react";

function App() {
  const locale = LOCALES.RUSSIAN;
  const [currentLocale, setCurrentLocale] = useState(locale);

  const hangeChange = ({ target: { value } }: any) => {
    debugger;
    setCurrentLocale(value);
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.RUSSIAN}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout
                currentLocale={currentLocale}
                hangeChange={hangeChange}
              />
            }
          >
            <Route path="/" index element={<MainPage />} />
            <Route path="/catalog/:id" element={<FilmPage />} />
            <Route path="/filter/*" element={<CatalogPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/actor/:id" element={<ActorPage />} />
            <Route path="*" element={<Navigate to="main" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
//<Route path="/catalog" element={<CatalogPage />} />
