import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
} from "react-router-dom";
import Main from "@pages/main/Main";
import { AuthLayout, MainLayout } from "@shared/ui";
import EditPage from "@pages/edit/EditPage";
import Login from "@pages/login/Login";
import { getUser } from "@features/api/get/getUser";
import CreatePage from "@pages/create/Create";

const router =  createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Outlet />}>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Main />} loader={getUser}/>
				<Route path="/edit" element={<EditPage />}  loader={getUser}/>
				<Route path="/add" element={<CreatePage />} />
			</Route>

			<Route path="/" element={<AuthLayout />}>
				<Route path="*" element={<p>Страница недоступна</p>} />
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/registration" element={<p>Создать</p>} />
			</Route>
		</Route>
	)
);

export default router;
