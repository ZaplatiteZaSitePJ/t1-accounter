import UserForm from "@widgets/UserForm/UserForm";
import styles from "./EditPage.module.scss";

export default function EditPage() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Редактируйте свой аккаунт</h1>
			<UserForm />
		</div>
	);
}
