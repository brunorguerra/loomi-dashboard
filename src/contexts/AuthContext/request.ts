import { Api } from "../../services/Api";

interface LoginRequestProps {
    email: string;
    password: string;
}

export async function LoginRequest({ email, password }: LoginRequestProps) {
    try {
        const response = await Api.post("/login", { email, password });
        return response.data;
    } catch (error) {
        return null;
    }
}

export const UserExistsRequest = async (token: string) => {
    try {
        const response = await Api.post("/users", { token });
        return response.data;
    } catch (error) {
        return null;
    }
};
