import { createContext, ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { signInRequest } from "./request";
import { UserExistsRequest } from "./request";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    authenticateFailed: boolean;
    isAuthenticate: boolean;
    authenticate: ({ email, password }: AuthenticateData) => void;
    setIsAuthenticateFailed: (state: boolean) => void;
    signOut: () => void;
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
        const response = await signInRequest({ email, password });
        const { "access-token": token } = await response;
        if (response != null) {
            setCookies("payload-loomi", token, {
                maxAge: 60 * 60 * 24,
            });
            navigate("/", {});
        } else {
            setIsAuthenticateFailed(true);
        }
    }

    function signOut() {
        setIsAuthenticate(false);
        removeCookies("payload-loomi");
    }

    useEffect(() => {
        cookies["payload-loomi"] ===
            "226875f91cf43e2b0c314ef9c2a9521d5808960cc5a759c16d66e92803771178" &&
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
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
