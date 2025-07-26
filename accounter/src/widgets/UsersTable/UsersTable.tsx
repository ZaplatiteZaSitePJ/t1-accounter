import styles from "./UsersTable.module.scss"
import type { AccountType } from "@entities/Account/types/Account.interface"
import { Divider } from "@mui/material";
import type { FC } from "react"


type UsersTableProps = {
    allUsersData: AccountType[];
};

const UsersTable: FC<UsersTableProps> = ({allUsersData}) => {
    return (
    <table className={styles.table}>
        <caption>Подконтрольные пользователи:</caption>
        <thead>
            <tr>
                <th>id</th>
                <th>почта</th>
                <th>фамилия и имя</th>
            </tr>
        </thead>
        <tbody>
            <Divider sx={{margin: "8px 0", backgroundColor: "var(--grey-color)", width: "100%"}}/>
            {allUsersData.map((user: AccountType) => (
                <>
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.email}</td>
						<td>{user.fullName}</td>
					</tr>
                    <Divider sx={{margin: "8px 0", backgroundColor: "var(--grey-color)", width: "100%"}}/>
                </>
				))}
        </tbody>
    </table>
  )
}

export default UsersTable