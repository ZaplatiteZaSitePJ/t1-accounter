import type { AccountType } from "@entities/Account/types/Account.interface";
import styles from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import EmailField from "@features/userForm/ui/EmailField";
import { emailOptions } from "@features/userForm/options/email.options";
import PasswordField from "@features/userForm/ui/PasswordField";

import { ButtonFilled } from "@shared/ui/ui-kit/buttons";
import { Link } from "react-router-dom";

const LoginForm = () => {
	const { register, handleSubmit, reset, getValues } = useForm<AccountType>();

	const onAuth = () => {
		console.log(getValues());
		reset();
	};

	return (
		<form className={styles.userForm} onSubmit={handleSubmit(onAuth)}>
			<EmailField register={register("email", emailOptions)} />

			<PasswordField
				register={register("password", {
					required: "Пароль обязателен",
				})}
			/>

			<div className={styles.userForm__buttonsContainer}>
				<Link to="/auth/registration">Зарегистрироваться?</Link>
				<ButtonFilled
					type="submit"
					sx={{
						backgroundColor: "var(--green-color)",
						borderColor: "var(--green-color)",
					}}
				>
					Войти
				</ButtonFilled>
			</div>
		</form>
	);
};

export default LoginForm;
