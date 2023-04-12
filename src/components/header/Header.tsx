import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

export default function Header() {
	return (
		<header className={classes.container}>
			<div>
				<span>Film Movie</span>
				<nav>
					<NavLink to={'/main'}>
						<FormattedMessage id='main' />
					</NavLink>
					<NavLink to={'/catalog'}>
						<FormattedMessage id='films' />
					</NavLink>
					<NavLink to={'/admin'}>
						<FormattedMessage id='admin' />
					</NavLink>
				</nav>
			</div>
			<NavLink to={'/auth'}>
				<FormattedMessage id='auth' />
			</NavLink>
		</header>
	);
}
