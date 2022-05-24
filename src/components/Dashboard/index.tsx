import { DashboardProvider } from "../../contexts/DashboardContext";
import { Header } from "./Header";
import { Aside } from "./Aside";
import { Main } from "./Main";

export const Dashboard = () => {
    return (
        <DashboardProvider>
            <Header />
            <Aside />
            <Main />
        </DashboardProvider>
    );
};
