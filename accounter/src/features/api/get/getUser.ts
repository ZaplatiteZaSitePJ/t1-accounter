import baseAxios from "../baseAxios";

export const getUser = async () => {

	const userId = localStorage.getItem("userId")

	try {
		const response = await baseAxios.get(`/users/${userId}`, {
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
