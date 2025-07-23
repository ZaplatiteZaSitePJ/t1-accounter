import type { AccountType } from "@entities/Account/types/Account.interface";
import styles from "./UserForm.module.scss";
import { useForm } from "react-hook-form";
import NameField from "@features/userForm/ui/NameField";
import { nameOption } from "@features/userForm/options/name.options";
import SurNameField from "@features/userForm/ui/SurNameField";
import { surNameOption } from "@features/userForm/options/surname.options";
import EmailField from "@features/userForm/ui/EmailField";
import { emailOptions } from "@features/userForm/options/email.options";
import PhoneField from "@features/userForm/ui/PhoneField";
import { phoneOptions } from "@features/userForm/options/phone.options";
import PasswordField from "@features/userForm/ui/PasswordField";
import EmploymentSelect from "@features/userForm/ui/EmploymentSelect";
import { ButtonBordered, ButtonFilled } from "@shared/ui/ui-kit/buttons";

const UserForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<AccountType>();

	return (
		<form className={styles.userForm}>
			<div className={styles.userForm__nameContainer}>
				<h2>Имя</h2>

				<NameField
					register={register("name", nameOption)}
					subContent={
						errors.name && <div className={styles.errorDiv}></div>
					}
				/>

				<SurNameField
					register={register("surName", surNameOption)}
					subContent={
						errors.surName && (
							<div className={styles.errorDiv}></div>
						)
					}
				/>
			</div>

			<div className={styles.userForm__contactsContainer}>
				<h2>Контакты</h2>

				<EmailField
					register={register("email", emailOptions)}
					subContent={
						errors.email && <div className={styles.errorDiv}></div>
					}
				/>

				<PhoneField
					register={register("phone", phoneOptions)}
					subContent={
						errors.phone && <div className={styles.errorDiv}></div>
					}
				/>

				<EmploymentSelect register={register("employment")} />
			</div>

			<PasswordField
				register={register("password", {
					required: "Пароль обязателен",
				})}
			/>

			<div className={styles.userForm__buttonsContainer}>
				<ButtonBordered onClick={() => reset()}>
					Сбросить
				</ButtonBordered>
				<ButtonFilled
					type="submit"
					sx={{
						backgroundColor: "var(--green-color)",
						borderColor: "var(--green-color)",
					}}
				>
					Сохранить
				</ButtonFilled>
			</div>
		</form>
	);
};

export default UserForm;
