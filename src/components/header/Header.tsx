import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'

export default function Header() {
  return (
		<header className={classes.container}>
			<div>
				<span>Film Movie</span>
				<nav>
					<NavLink to={'/main'}>Главная</NavLink>
					<NavLink to={'/catalog'}>Фильмы</NavLink>
					<NavLink to={'/admin'}>Админка</NavLink>
				</nav>
			</div>
      <NavLink to={'/auth'}>Войти</NavLink>
		</header>
	);
}
