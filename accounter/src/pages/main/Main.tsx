import Account from "@entities/Account/Account";
import styles from "./Main.module.scss"


export default function Main() {
  return (
    <div className={styles.container}>
      <Account/>
    </div>
  )
}
