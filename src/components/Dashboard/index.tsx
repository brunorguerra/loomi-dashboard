import { Header } from "./Header";
import { Aside } from "./Aside";
import { Main } from "./Main";
import { ProfileProvider } from "../../contexts/Dashboard/ProfileContext";
import { useState } from "react";
import { PreLoader } from "./PreLoader";

export const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 4000);

    return (
        <>
            {isLoading && <PreLoader />}
            <ProfileProvider>
                <Header />
            </ProfileProvider>
            <Aside />
            <Main />
        </>
    );
};
