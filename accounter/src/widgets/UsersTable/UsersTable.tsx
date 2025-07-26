import styles from "./UsersTable.module.scss";
import type { AccountType } from "@entities/Account/types/Account.interface";
import type { FC } from "react";

type UsersTableProps = {
	allUsersData: AccountType[];
};

const UsersTable: FC<UsersTableProps> = ({ allUsersData }) => {
	return (
		<table className={styles.table}>
			<caption>Список пользователей:</caption>
			<thead>
				<tr>
					<th className={styles.firstColumn}>фамилия и имя</th>
					<th className={styles.id}>id</th>
					<th>почта</th>
					<th>должность</th>
				</tr>
			</thead>
			<tbody>
				{allUsersData.map((user: AccountType) => (
					<>
						<tr key={user.id}>
							<td className={styles.firstColumn}>
								{user.fullName}
							</td>
							<td className={styles.id}>{user.id}</td>
							<td>{user.email}</td>
							<td>{user.employment ? user.employment : "—"}</td>
						</tr>
					</>
				))}
			</tbody>
		</table>
	);
};

export default UsersTable;
