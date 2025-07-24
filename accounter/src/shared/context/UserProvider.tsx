import { useState } from "react";
import type { ReactNode } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [id, setId] = useState<string | null>(null);

	return (
		<UserContext.Provider value={{ id, setId }}>
			{children}
		</UserContext.Provider>
	);
};
