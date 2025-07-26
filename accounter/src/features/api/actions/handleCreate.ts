import type { AccountType } from "@entities/Account/types/Account.interface";
import baseAxios from "../baseAxios";

type formatedUserType = {
	name: string;
	surName: string;
	fullName: string;
	email: string;
	employment?: string;
	password: string;
	userAgreement?: boolean;
	telephone?: string;
};

export const handleCreate = async (newUser: AccountType) => {
	const { name, surName, email, password, phone, employment } = newUser;

	const formatedUser: formatedUserType = {
		name,
		surName,
		fullName: `${name} ${surName}`,
		email,
		employment,
		userAgreement: false,
		password,
	};

	if (phone) {
		formatedUser.telephone = phone;
	}

	try {
		const response = await baseAxios.post(`/users/`, formatedUser, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		console.log("Успешное создание аккаунта", response.data);
	} catch (error: unknown) {
		console.error("Ошибка создания:", error);
		throw error;
	}
};
