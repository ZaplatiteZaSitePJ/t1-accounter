import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import cn from "classnames";

export default function Navigation() {
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
			<NavLink to={"/auth/login"} className={styles.navigation__logout}>
				<span>выйти</span>
			</NavLink>
		</nav>
	);
}
