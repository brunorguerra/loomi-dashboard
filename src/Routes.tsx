import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    );
};
