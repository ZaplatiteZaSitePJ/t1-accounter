import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
} from "react-router-dom";
import Main from "@pages/main/Main";
import { AuthLayout, MainLayout } from "@shared/ui";
import EditPage from "@pages/edit/EditPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Outlet/>}>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Main />} />
				<Route
					path="/edit" element={<EditPage/>}
				/>
			</Route>

			<Route path="/" element={<AuthLayout />}>
				<Route
					path="/auth/login" element={<p>Войти</p>}
				/>
				<Route
					path="/auth/registration" element={<p>Создать</p>}
				/>

			</Route>
		</Route>
	)
);

export default router;
