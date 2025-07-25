import baseAxios from "../baseAxios";

export const handleDelete = async ()=> {

    const id = localStorage.getItem("userId")
    
    try {
        const response = await baseAxios.post(
            `/users/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        console.log("Успешное удаление аккаунта", response.data);
    } catch (error: any) {
        console.error("Ошибка удаления:", error.response?.data || error.message);
        throw error;
    }
};
