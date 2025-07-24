import LoginForm from "@widgets/LoginForm/LoginForm";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className={styles.login}>
			<h1 className={styles.title}>Войдите в аккаунт</h1>
			<LoginForm />
		</div>
	);
}
