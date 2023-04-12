import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import FilmPage from './pages/FilmPage/FilmPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import AdminPage from './pages/AdminPage/AdminPage';
import ActorPage from './pages/ActorPage/ActorPage';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/main' element={<MainPage />} />
				<Route path='/catalog/:id' element={<FilmPage />} />
				<Route path='/catalog' element={<CatalogPage />} />
				<Route path='/admin' element={<AdminPage />} />
				<Route path='/auth' element={<AuthPage />} />
				<Route path='/actor/:id' element={<ActorPage />} />
				<Route path='*' element={<Navigate to='main' replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
