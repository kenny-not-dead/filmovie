import classes from './Login.module.scss';
import { SyntheticEvent, useState } from 'react';
import mail from '../../../static/svgs/mailBlack.svg';
import pass from '../../../static/svgs/pass.svg';
import { Button } from '../../UI/button/Button';
import { Input } from '../../UI/input/Input';

interface LoginProps {
	onClick(): void;
}

export const Login = ({onClick}: LoginProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const inputHandler = (
		e: React.ChangeEvent<HTMLInputElement>,
		email?: boolean
	) => {
		email
			? setEmail(e.target.value)
			: setPassword(e.target.value)
		setError('');
	};

	const authHandler = (event: SyntheticEvent) => {
		event.preventDefault();
		// request
		
	};

	return (
		<form className={classes.form__container}>
			<div className={classes.logo__container}>
				{/* <img src={logo} alt='' /> */}
			</div>
			<div className={classes.title__container}>
				<p className={classes.title}>Войдите в свою учетную запись</p>
				<span className={classes.subtitle}>
					Миллионы фильмов и сериалов. Все это в одном удобном для Вас месте.
				</span>
			</div>
			{error && (
				<div className={classes.error}>
					<span>{error}</span>
				</div>
			)}
			<Input
				id={'Email'}
				type={'email'}
				placeholder={'name@mail.com'}
				value={email}
				onChange={e => {
					inputHandler(e, true);
				}}
				icon={mail}
			/>
			<Input
				id={'Пароль'}
				type={'password'}
				placeholder={'password'}
				value={password}
				onChange={e => {
					inputHandler(e);
				}}
				icon={pass}
			/>
			<Button
				id={'Войти'}
				className={'signup__btn'}
				onClick={e => {
					authHandler(e);
				}}
			/>
			<div className={classes.login}>
				<span>Нет учетной записи? </span>
				<span className={classes.accent} onClick={onClick}>Зарегистрироваться</span>
			</div>
		</form>
	);
};
