import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import cn from "classnames";

export default function Navigation() {
	const navigate = useNavigate()
	const onLogout = () => {
		localStorage.removeItem("userId")
		navigate("/auth/login")
	}
	return (
		<nav className={styles.navigation}>
			<NavLink
				to={"/"}
				className={({ isActive }) =>
					cn(styles.navigation__pages, {
						[styles.navigation__active]: isActive,
					})
				}
			>
				аккаунт
			</NavLink>
			<NavLink
				to={"/edit"}
				className={({ isActive }) =>
					cn(styles.navigation__pages, {
						[styles.navigation__active]: isActive,
					})
				}
			>
				изменить
			</NavLink>
			<NavLink
				to={"/auth/registration"}
				className={({ isActive }) =>
					cn(styles.navigation__pages, {
						[styles.navigation__active]: isActive,
					})
				}
			>
				создать
			</NavLink>
			<button className={styles.navigation__logout} type="button" onClick={onLogout}>
				<span>выйти</span>
			</button>
		</nav>
	);
}
