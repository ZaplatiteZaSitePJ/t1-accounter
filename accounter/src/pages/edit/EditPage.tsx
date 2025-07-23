import UserForm from "@widgets/UserForm/UserForm"
import styles from "./EditPage.module.scss"


export default function EditPage() {
  return (
    <div className={styles.container}>
      <UserForm />
    </div>
  )
}
