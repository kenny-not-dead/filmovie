import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainPage } from "./pages/MainPage/MainPage";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { ActorPage } from "./pages/ActorPage/ActorPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { useState } from "react";
import { CatalogPageMain } from "./pages/CatalogPage/CatalogPageMain";
import { catalogData } from "./store/data";

function App() {
  let newCatalogData = catalogData;

  const [newData, setNewData] = useState(newCatalogData);

  const deleteItem = (e: any, el: any) => {
    e.preventDefault();
    let newArr = newData.filter((i) => i.id !== el);
    setNewData(newArr);
  };

  const save = (e: any, formdata: any) => {
    e.preventDefault();
    debugger;
    /*
    const updatedItems = newData.map((item) =>
      item.id == formdata.id
        ? (item.filmLang[0].filmName = formdata.name) // ошибка тут
        : item
    );
    setNewData(updatedItems);
     */
  };

  const locale = LOCALES.RUSSIAN;
  const [currentLocale, setCurrentLocale] = useState(locale);

  const hangeChange = ({ target: { value } }: any) => {
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
            <Route path="/catalog/:id" element={<MoviePage />} />
            <Route
              path="/movies/*"
              element={<CatalogPage newCatalogData={newData} />}
            />
            <Route path="/movies/" element={<CatalogPageMain />} />
            <Route
              path="/admin"
              element={
                <AdminPage
                  newCatalogData={newData}
                  deleteItem={deleteItem}
                  save={save}
                />
              }
            />
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
