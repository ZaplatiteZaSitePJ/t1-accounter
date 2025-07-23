import type { AccountType } from "@entities/Account/types/Account.interface";
import styles from "./AddTaskForm.module.scss";
import { useForm } from "react-hook-form";

const UserForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<AccountType>();

	return (
		<div className={styles.container}>
			<h2>Add Task</h2>
			<form className={styles.addForm} onSubmit={handleSubmit(onSubmit)}>
				<TitleInput
					register={register("title", titleOption)}
					subContent={
						<>
							<p className={styles.subInfo}>5 - 30 symbols</p>
							{errors.title && (
								<div className={styles.errorDiv}></div>
							)}
						</>
					}
				/>

				<DescriptionInput
					register={register("description", descriptionOptions)}
					subContent={
						<>
							<p className={styles.subInfo}>{"<"} 100 symbols</p>
							{errors.description && (
								<div className={styles.errorDiv}></div>
							)}
						</>
					}
				/>

				<CategorySelect
					value={category}
					sx={{ width: "fit-content", margin: "0 auto" }}
					register={{
						...register("category", {
							required: "Поле обязательно",
						}),
					}}
					subContent={
						<>
							{errors.category && (
								<div className={styles.errorDiv}></div>
							)}
						</>
					}
				/>

				<StatusSelect
					value={status}
					sx={{
						width: "fit-content",
						margin: "0 auto",
					}}
					register={{
						...register("status", {
							required: "Поле обязательно",
						}),
					}}
					subContent={
						<>
							{errors.status && (
								<div className={styles.errorDiv}></div>
							)}
						</>
					}
				/>

				<div className={styles.addForm__dateContainer}>
					{errors.startTime && (
						<div className={styles.errorDiv}></div>
					)}

					<StartTimeInput
						register={register("startTime", timeOptions)}
						sx={{ width: "5rem" }}
					/>

					<span> — </span>

					<EndTimeInput
						register={register("endTime", {
							...timeOptions,
							validate: (value) => {
								return timeValidation(
										getValues("startTime"),
										value
									);
								},
							})}
						sx={{ width: "5rem" }}
					/>
					{errors.endTime && <div className={styles.errorDiv}></div>}
				</div>

				<div className={styles.addForm__prioritiesContainer}>
					<h3>priorities</h3>

					<PrioritiesSelect
						priorites={priorites}
						action={prioritesHadndleChoice}
					/>
				</div>

				<div className={styles.addForm__progressContainer}>
					<h3>progress</h3>

					<ProgressSelect
						progress={progress}
						action={prorgessHandleChoise}
					/>
				</div>

				<ContentInput register={register("content")} />

				<div className={styles.addForm__buttonsContainer}>
					<ButtonBordered onClick={() => reset()}>
						reset
					</ButtonBordered>
					<ButtonFilled type="submit">add</ButtonFilled>
				</div>
			</form>
		</div>
	);
};

export default UserForm;
