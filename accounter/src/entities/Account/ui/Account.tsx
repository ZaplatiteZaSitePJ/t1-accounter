import { useLoaderData } from "react-router-dom"
import styles from "./Account.module.scss"

export default function Account() {
    const userData = useLoaderData()
	console.log(userData)

    return (
    <table className={styles.table}>
        <caption>{userData.fullName}</caption>
        <thead>
            <tr>
                <th>id</th>
                <th>почта</th>
                <th>телефон</th>
                <th>должность</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{userData.id}</td>
                <td>{userData.email}</td>
                <td>{userData.phone ? `${userData.phone}` : "-"}</td>
                <td>{userData.employment ? `${userData.employment}` : "-"}</td>
            </tr>
        </tbody>
    </table>
  )
}
