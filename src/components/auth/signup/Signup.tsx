import classes from './Signup.module.scss';
import { SyntheticEvent, useState } from 'react';
import { setUser } from '../../../store/slices/userSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import mail from '../../../static/svgs/mailBlack.svg';
import pass from '../../../static/svgs/pass.svg';

export const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [retypePassword, setRetypePassword] = useState('');
	const [error, setError] = useState('');

	// const dispatch = useAppDispatch();
	// const navigate = useNavigate();

	// function authHandler(
	// 	event: SyntheticEvent,
	// 	email: string,
	// 	password: string,
	// 	retypePassword: string
	// ) {
	// 	event.preventDefault();
	// 	const valid = makeValidate(email, password, retypePassword);
	// 	setError(valid);
	// 	if (!valid) {
	// 		makeBackendRequest('/api/auth/registration/', 'POST', {
	// 			email: email,
	// 			password: password,
	// 		})
	// 			.then(response => {
	// 				dispatch(
	// 					setUser({
	// 						id: response.data.id,
	// 						email: response.data.email,
	// 						token: response.data.token,
	// 						integration: false,
	// 					})
	// 				);
	// 				navigate('/integration');
	// 			})
	// 			.catch(error => setError(error.response.data.message));
	// 	}
	// }

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
			<div className={classes.input__container}>
				<label className={classes.input__label} htmlFor='email_field'>
					Email
				</label>
				<img className={classes.icon} src={mail} alt='' />
				<input
					placeholder='name@mail.com'
					type='email'
					className={classes.input__field}
					id='email_field'
					value={email}
					onChange={e => {
						setEmail(e.target.value);
						setError('');
					}}
					required
				/>
			</div>
			<div className={classes.input__container}>
				<label className={classes.input__label} htmlFor='password_field'>
					Пароль
				</label>
				<img className={classes.icon} src={pass} alt='' />
				<input
					placeholder='password'
					type='password'
					className={classes.input__field}
					value={password}
					onChange={e => {
						setPassword(e.target.value);
						setError('');
					}}
					required
				/>
			</div>
			<div className={classes.input__container}>
				<label className={classes.input__label} htmlFor='password_field'>
					Повторите пароль
				</label>
				<img className={classes.icon} src={pass} alt='' />
				<input
					placeholder='password'
					type='password'
					className={classes.input__field}
					value={retypePassword}
					onChange={e => {
						setRetypePassword(e.target.value);
						setError('');
					}}
					required
				/>
			</div>
			<button
				// onClick={e => authHandler(e, email, password, retypePassword)}
				className={classes.signin__btn}
			>
				<span>Создать учетную запись</span>
			</button>
			<div className={classes.login}>
				<span>Уже есть учетная запись? </span>
				<NavLink to={'/login'}>
					<span>Войти</span>
				</NavLink>
			</div>
		</form>
	);
}

