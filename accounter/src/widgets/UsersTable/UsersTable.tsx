import styles from "./UsersTable.module.scss"
import type { AccountType } from "@entities/Account/types/Account.interface"
import type { FC } from "react"


type UsersTableProps = {
    allUsersData: AccountType[];
};

const UsersTable: FC<UsersTableProps> = ({allUsersData}) => {
    return (
    <table className={styles.table}>
        <caption>Список пользователей:</caption>
        <thead>
            <tr>
                <th>id</th>
                <th>почта</th>
                <th>фамилия и имя</th>
            </tr>
        </thead>
        <tbody>
            {allUsersData.map((user: AccountType) => (
                <>
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.email}</td>
						<td>{user.fullName}</td>
					</tr>

                </>
				))}
        </tbody>
    </table>
  )
}

export default UsersTable