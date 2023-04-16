import { useState } from "react";
import { Login } from "../../components/auth/login/Login";
import {Signup} from "../../components/auth/signup/Signup";

export function AuthPage() {
	const [signup, setSignup] = useState(true)

	const changeComponent = () => {
		setSignup(!signup)
	}

	return (
		<>
			{signup ? (
				<Signup onClick={changeComponent} />
			) : (
				<Login onClick={changeComponent} />
			)}
		</>
	);
}
