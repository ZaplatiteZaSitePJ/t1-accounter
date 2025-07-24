import { RouterProvider } from "react-router-dom";
import router from "./routing/AppRouter";
import { UserProvider } from "@shared/context/UserContext";

function App() {
	return (
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	);
}

export default App;
