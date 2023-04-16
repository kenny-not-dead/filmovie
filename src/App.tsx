import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { MainPage } from './pages/MainPage/MainPage'
import { FilmPage } from './pages/FilmPage/FilmPage'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { AdminPage } from './pages/AdminPage/AdminPage'
import { ActorPage } from './pages/ActorPage/ActorPage'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { IntlProvider } from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'

function App() {
	const locale = LOCALES.RUSSIAN;

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.RUSSIAN}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' index element={<MainPage />} />
            <Route path='/catalog/:id' element={<FilmPage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/actor/:id' element={<ActorPage />} />
            <Route path='*' element={<Navigate to='main' replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  )
}

export default App;
