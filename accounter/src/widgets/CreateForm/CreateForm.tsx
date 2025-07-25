import type { AccountType } from "@entities/Account/types/Account.interface";
import styles from "./CreateForm.module.scss";
import { useForm } from "react-hook-form";
import NameField from "@features/userForm/ui/NameField";
import { nameOption } from "@features/userForm/options/name.options";
import SurNameField from "@features/userForm/ui/SurNameField";
import { surNameOption } from "@features/userForm/options/surname.options";
import EmailField from "@features/userForm/ui/EmailField";
import { emailOptions } from "@features/userForm/options/email.options";
import PhoneField from "@features/userForm/ui/PhoneField";
import { phoneOptions } from "@features/userForm/options/phone.options";
import EmploymentSelect from "@features/userForm/ui/EmploymentSelect";
import { ButtonBordered, ButtonFilled } from "@shared/ui/ui-kit/buttons";
import PasswordField from "@features/userForm/ui/PasswordField";
import { Divider } from "@mui/material";
import { handleCreate } from "@features/api/actions/handleCreate";

const CreateForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
	} = useForm<AccountType>();

	const onCreate = async () => {
		try {
			console.log(getValues());
			await handleCreate(getValues());
			reset();
		} catch (error) {
			console.log(error)
		}
		
	};

	return (
		<form className={styles.userForm} onSubmit={handleSubmit(onCreate)}>
			<div className={styles.userForm__nameContainer}>
				<h2>Имя</h2>

				<NameField
					register={register("name", nameOption)}
					subContent={
						<>
							<p className={styles.subInfo}>обязательное поле!</p>
							{errors.name && (
								<div className={styles.errorDiv}></div>
							)}
						</>
					}
				/>

				<SurNameField
					register={register("surName", surNameOption)}
					subContent={
						<>
							<p className={styles.subInfo}>обязательное поле!</p>
							{errors.surName && (
								<div className={styles.errorDiv}></div>
							)}
						</>
					}
				/>
			</div>

			<div className={styles.userForm__contactsContainer}>
				<h2>Контактные данные</h2>

				<EmailField
					register={register("email", emailOptions)}
					subContent={
						<>
							<p className={styles.subInfo}>обязательное поле!</p>
							{errors.email && (
								<div className={styles.errorDiv}></div>
							)}
						</>
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
			<Divider sx={{backgroundColor: "var(--grey-color)"}}/>

			<PasswordField
				sx={{marginTop: "12px"}}
				register={register("password", {
					required: "Пароль обязателен",
				})}
				subContent={
					<>
						<p className={styles.subInfo}>
							обязательное поле | Техническим заданием не
							предусмотрено <b>никаких</b> ограничений на пароль,
							но, пожалуйста, будьте разумны!
						</p>
						{errors.password && (
							<div className={styles.errorDiv}></div>
						)}
					</>
				}
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
						Создать
					</ButtonFilled>
				</div>
		</form>
	);
};

export default CreateForm;
