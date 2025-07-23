import styles from "./Account.module.scss"

export default function Account() {
  return (
    <table>
        <caption>Мужчина Мужиков</caption>
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
                <td>21312412122e3r3</td>
                <td>email@gmail.com</td>
                <td>+79999999999</td>
                <td>Бухгалтер</td>
            </tr>
        </tbody>
    </table>
  )
}
