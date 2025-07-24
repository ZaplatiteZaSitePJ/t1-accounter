import { createContext } from "react";

export type UserContextType = {
	id: string | null;
	setId: (id: string | null) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
	undefined
);
