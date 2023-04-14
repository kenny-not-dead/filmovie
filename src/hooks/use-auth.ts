import { useAppSelector } from './redux-hooks'

export function useAuth() {
	const {id, email, token} = useAppSelector(state => state.user)

	return {
		id,
		email,
		token,
		isAuth: !!email,
	};
}