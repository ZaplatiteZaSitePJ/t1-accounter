import styles from "./Create.module.scss";
import CreateForm from "@widgets/CreateForm/CreateForm";

export default function CreatePage() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Создать новый аккаунт</h1>
			<CreateForm />
		</div>
	);
}
