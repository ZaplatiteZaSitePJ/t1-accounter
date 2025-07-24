import baseAxios from "../baseAxios";

export const handleLogin = async (id: string) => {
	try {
		const response = await baseAxios.get(`/users/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		console.log("Информация:", response.data);
		return response.data;
	} catch (error: any) {
		console.error("Ошибка логина:", error.response?.data || error.message);
		throw error;
	}
};
