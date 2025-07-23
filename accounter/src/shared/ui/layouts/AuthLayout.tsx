import { Link, Outlet } from "react-router-dom"
import styles from "./Layout.module.scss"

export default function AuthLayout() {
  return (
    <div className={styles.background}>
        <header className={styles.layout__header}>
          <Link to={"/"} className={styles.layout__headerTitle}>
            Accounter
          </Link>
        </header>
        <div className={styles.authLayout}>
            <Outlet />
        </div>
      
    </div>
  )
}
