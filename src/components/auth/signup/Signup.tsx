import classes from './Signup.module.scss';
import { SyntheticEvent, useState } from 'react';
import mail from '../../../static/svgs/mailBlack.svg';
import pass from '../../../static/svgs/pass.svg';
import { Button } from '../../UI/button/Button';
import { Input } from '../../UI/input/Input';

interface SignipProps {
	onClick(): void
}

export const Signup = ({onClick}: SignipProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [retypePassword, setRetypePassword] = useState('');
	const [error, setError] = useState('');

	const inputHandler = (
		e: React.ChangeEvent<HTMLInputElement>,
		email?: boolean,
		pass?: boolean
	) => {
		email
			? setEmail(e.target.value)
			: pass
			? setPassword(e.target.value)
			: setRetypePassword(e.target.value);
		setError('');
	};

	const validateHandler = (
		email: string,
		password: string,
		retypePassword: string
	): string => {
		const reEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
		const rePass = /^.{8,}$/;
		if (!email || !password || !retypePassword) return 'Заполните все поля';
		else if (!reEmail.test(email)) return 'Некорректный email';
		else if (!rePass.test(password))
			return 'Пароль должен быть не короче 8 символов';
		else if (password !== retypePassword) return 'Пароли не совпадают';
		return '';
	};

	const authHandler = (event: SyntheticEvent) => {
		event.preventDefault();
		const valid = validateHandler(email, password, retypePassword);
		setError(valid);
		if (!valid) {
			// request
		}
	};

	return (
		<form className={classes.form__container}>
			<div className={classes.logo__container}>
				{/* <img src={logo} alt='' /> */}
			</div>
			<div className={classes.title__container}>
				<p className={classes.title}>Создайте свой аккаунт</p>
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
					inputHandler(e, true, false);
				}}
				icon={mail}
			/>
			<Input
				id={'Пароль'}
				type={'password'}
				placeholder={'password'}
				value={password}
				onChange={e => {
					inputHandler(e, false, true);
				}}
				icon={pass}
			/>
			<Input
				id={'Повторите пароль'}
				type={'password'}
				placeholder={'password'}
				value={retypePassword}
				onChange={e => {
					inputHandler(e);
				}}
				icon={pass}
			/>
			<Button
				id={'Создать учетную запись'}
				className={'signup__btn'}
				onClick={e => {
					authHandler(e);
				}}
			/>
			<div className={classes.login}>
				<span>Уже есть учетная запись? </span>
				<span className={classes.accent} onClick={onClick}>Войти</span>
			</div>
		</form>
	);
};
