import type { AccountType } from "@entities/Account/types/Account.interface";
import styles from "./EditForm.module.scss";
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
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const EditForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
	} = useForm<AccountType>();

	const userData = useLoaderData();

	useEffect(() => {
		if (userData) {
			reset(userData);
		}
	}, [userData, reset]);

	const onSave = () => {
		console.log(getValues());
		reset();
	};

	return (
		<form className={styles.userForm} onSubmit={handleSubmit(onSave)}>
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
					sx={{
						"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
							{
								borderColor: "var(--grey-color)",
							},
						"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
							{
								borderColor: "var(--grey-color)",
							},
					}}
					isAvailable={false}
					register={register("email", emailOptions)}
				/>

				<PhoneField
					register={register("phone", phoneOptions)}
					subContent={
						errors.phone && <div className={styles.errorDiv}></div>
					}
				/>

				{userData.id !== "1" && <EmploymentSelect register={register("employment")} defaultValue={userData.employment}/>}
			</div>

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

export default EditForm;
