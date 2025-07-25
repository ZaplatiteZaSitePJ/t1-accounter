import axios from "axios";
import baseAxios from "../baseAxios";
import { redirect } from "react-router-dom";

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
		if (axios.isAxiosError(error) && error.response?.status === 404) {
			throw redirect("/auth/login");
		}
		console.error("Ошибка логина:", error.response?.data || error.message);
		throw error;
	}
};
