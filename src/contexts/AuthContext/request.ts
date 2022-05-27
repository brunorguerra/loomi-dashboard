import { Api } from "../../services/Api";

interface SignInRequestProps {
    email: string;
    password: string;
}

export async function signInRequest({ email, password }: SignInRequestProps) {
    try {
        const response = await Api.post("/login", {
            email: email,
            senha: password,
        });

        return response.data;
    } catch (error) {
        try {
            const response = await Api.post("/login2", {
                email: email,
                senha: password,
            });

            return response.data;
        } catch (error) {
            try {
                const response = await Api.post("/login3", {
                    email: email,
                    senha: password,
                });

                return response.data;
            } catch (error) {
                return null;
            }
        }
    }
}

export const UserExistsRequest = async (token: string) => {
    try {
        const response = await Api.post("/login", { token });
        return response.data;
    } catch (error) {
        return null;
    }
};
