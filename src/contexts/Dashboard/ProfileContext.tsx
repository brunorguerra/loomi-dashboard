import { createContext, useEffect, useState } from "react";
import { ProviderPropsType } from "../../types/DashboardTypes";
import { getDataOfRequest } from "./utils";

interface ProfileContextData {
    profileData: ProfileDataProps;
}

type ProfileDataProps = {
    name: string;
    avatar: string;
};

export const ProfileContext = createContext({} as ProfileContextData);

export const ProfileProvider = ({ children }: ProviderPropsType) => {
    const [profileData, setProfileData] = useState({} as ProfileDataProps);

    async function getAllProfileData() {
        setProfileData(await getDataOfRequest("/me"));
    }

    useEffect(() => {
        return () => {
            getAllProfileData();
        };
    }, []);

    return (
        <ProfileContext.Provider value={{ profileData }}>
            {children}
        </ProfileContext.Provider>
    );
};
