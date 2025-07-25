import type { AccountType } from "@entities/Account/types/Account.interface";
import baseAxios from "../baseAxios";

export const handleCreate = async (newUser: AccountType)=> {
  
    const {name, surName, email, password, phone, employment} = newUser

    const formatedUser = {
        name: name,
        surName: surName,
        fullName: `${name} ${surName}`,
        email: email,
        telephone: phone,
        employment: employment,
        userAgreement: false,
        password: password
    }
    try {
        const response = await baseAxios.post(
            `/users/`,
            formatedUser,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        console.log("Успешное создание аккаунта", response.data);
    } catch (error: any) {
        console.error("Ошибка создания:", error.response?.data || error.message);
        throw error;
    }
};
