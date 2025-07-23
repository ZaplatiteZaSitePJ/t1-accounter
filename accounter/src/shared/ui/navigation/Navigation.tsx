import { Link } from "react-router-dom"
import styles from "./Navigation.module.scss"

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to={"/"} className={styles.navigation__pages}>аккаунт</Link>
      <Link to={"/edit"} className={styles.navigation__pages}>редактировать</Link>
      <Link to={"/auth/registration"} className={styles.navigation__pages}>создать</Link>
      <Link to={"/auth/login"} className={styles.navigation__logout}>
        <span>выйти</span>
    </Link>

    </nav>
  )
}
