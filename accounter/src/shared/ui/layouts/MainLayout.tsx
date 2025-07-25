import { Link, Outlet } from "react-router-dom"
import styles from "./Layout.module.scss"
import Navigation from "../navigation/Navigation"

export default function MainLayout() {
  return (
    <div className={styles.background}>
        <div className={styles.layout}>
            <header className={styles.layout__header}>
              <Link to={"/"} className={styles.layout__headerTitle}>
                Accounter
              </Link>
            </header>
            <aside className={styles.layout__aside}><Navigation/></aside>
            <div className={styles.layout__wrapper}>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
