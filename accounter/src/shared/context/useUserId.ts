import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUserId = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUserId должен использоваться внутри UserProvider");
	}
	return context;
};
