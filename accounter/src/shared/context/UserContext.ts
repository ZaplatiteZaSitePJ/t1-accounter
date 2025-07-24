import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type UserContextType = {
	id: string | null;
	setId: (id: string | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [id, setId] = useState<string | null>(null);

	return (
		<UserContext.Provider value={{ id, setId }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserId = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useAuth must be used inside AuthProvider");
	}
	return context;
};
