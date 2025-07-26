import styles from "./UsersTable.module.scss";
import type { AccountType } from "@entities/Account/types/Account.interface";
import { handleDelete } from "@features/api/actions/handleDelete";
import { ButtonBordered } from "@shared/ui/ui-kit/buttons";
import { useEffect, useState, type FC } from "react";

type UsersTableProps = {
	allUsersData: AccountType[];
};

const UsersTable: FC<UsersTableProps> = ({ allUsersData }) => {
	const [filtredUsers, setFiltredUsers] = useState<AccountType[]>([]);

	const deleteUser = async (id: string) => {
		try {
			await handleDelete(id);
			const clearedUsers = filtredUsers.filter((user) => user.id !== id);
			setFiltredUsers(clearedUsers);
		} catch {
			console.log("Что-то пошло не так");
		}
	};

	useEffect(() => {
		setFiltredUsers(allUsersData.filter((user) => user.id !== "1"));
	}, []);

	if (filtredUsers.length === 0) {
		return <p>Нет других пользователей</p>;
	}

	return (
		<table className={styles.table}>
			<caption>Список пользователей:</caption>
			<thead>
				<tr>
					<th className={styles.firstColumn}>фамилия и имя</th>
					<th className={styles.id}>id</th>
					<th>почта</th>
					<th>должность</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{filtredUsers.map((user: AccountType) => (
					<>
						<tr key={user.id}>
							<td className={styles.firstColumn}>
								{user.fullName}
							</td>
							<td className={styles.id}>{user.id}</td>
							<td>{user.email}</td>
							<td>{user.employment ? user.employment : "—"}</td>
							<td>
								<ButtonBordered
									onClick={() => deleteUser(user.id)}
									sx={{
										color: "var(--light-grey-color)",
										borderColor: "var(--red-color)",
									}}
								>
									Удалить
								</ButtonBordered>
							</td>
						</tr>
					</>
				))}
			</tbody>
		</table>
	);
};

export default UsersTable;
