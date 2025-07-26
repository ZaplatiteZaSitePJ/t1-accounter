import styles from "./UsersTable.module.scss";
import type { AccountType } from "@entities/Account/types/Account.interface";
import { ButtonBordered } from "@shared/ui/ui-kit/buttons";
import type { FC } from "react";

type UsersTableProps = {
	allUsersData: AccountType[];
};

const UsersTable: FC<UsersTableProps> = ({ allUsersData }) => {
	const filtredUsers = allUsersData.filter((user) => user.id !== "1");
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
