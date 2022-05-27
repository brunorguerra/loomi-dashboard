import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { PanelLogin } from "../PanelLogin";

interface PrivateRouteProps {
    children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticate } = useContext(AuthContext);

    if (!isAuthenticate) {
        return <PanelLogin />;
    }

    return children;
};
