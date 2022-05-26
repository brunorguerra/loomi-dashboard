import { createContext, ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "./request";
import { UserExistsRequest } from "./request";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    authenticateFailed: boolean;
    isAuthenticate: boolean;
    authenticate: ({ email, password }: AuthenticateData) => void;
    setIsAuthenticateFailed: (state: boolean) => void;
}

type AuthenticateData = {
    email: string;
    password: string;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [authenticateFailed, setIsAuthenticateFailed] = useState(false);
    const [cookies, setCookies, removeCookies] = useCookies(["payload-loomi"]);
    const navigate = useNavigate();

    async function authenticate({ email, password }: AuthenticateData) {
        const response = await LoginRequest({ email, password });
        if (response != null) {
            setCookies("payload-loomi", response.token, {
                maxAge: 60 * 60 * 24,
            });
            navigate("/", {});
        } else {
            setIsAuthenticateFailed(true);
        }
    }

    function logout() {
        setIsAuthenticate(false);
        removeCookies("payload-loomi");
    }

    useEffect(() => {
        UserExistsRequest(cookies["payload-loomi"]).then((response) =>
            response != null
                ? setIsAuthenticate(true)
                : setIsAuthenticate(false)
        );
    }, [cookies, isAuthenticate]);

    return (
        <AuthContext.Provider
            value={{
                authenticateFailed,
                isAuthenticate,
                authenticate,
                setIsAuthenticateFailed,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
