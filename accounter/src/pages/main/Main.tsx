import Account from "@entities/Account/ui/Account";
import styles from "./Main.module.scss";
import { useLoaderData } from "react-router-dom";

export default function Main() {

	const userData = useLoaderData()
	console.log(userData)

	return (
		<div className={styles.container}>
			<Account />
		</div>
	);
}
