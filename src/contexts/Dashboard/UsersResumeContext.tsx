import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { ProviderPropsType } from "../../types/DashboardTypes";
import { returnValueOfArray } from "./utils";

interface UsersResumeContextData {
    transactionsAge: number[];
    sessionsSex: number[];
    transactionsClientType: number[];
}

type UsersResumeProps = {
    "transactions-per-age": { value: number }[];
    "sessions-per-sex": {
        male: number;
        female: number;
    };
    "transactions-per-client-type": { value: number }[];
};

export const UsersResumeContext = createContext({} as UsersResumeContextData);

export const UsersResumeProvider = ({ children }: ProviderPropsType) => {
    const [transactionsAge, setTransactionsAge] = useState<number[]>([]);
    const [sessionsSex, setSessionsSex] = useState<number[]>([]);
    const [transactionsClientType, setTransactionsClientType] = useState<
        number[]
    >([]);

    async function getAllUsersResumeData() {
        try {
            const req = await Api.get("/users-resume");
            const {
                "transactions-per-age": transactionsPerAge,
                "sessions-per-sex": sessionsPerSex,
                "transactions-per-client-type": transactionsPerClientType,
            }: UsersResumeProps = await req.data;

            setTransactionsAge(returnValueOfArray(transactionsPerAge));
            setSessionsSex([sessionsPerSex.male, sessionsPerSex.female]);
            setTransactionsClientType(
                returnValueOfArray(transactionsPerClientType)
            );
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUsersResumeData();
    }, []);

    return (
        <UsersResumeContext.Provider
            value={{ transactionsAge, sessionsSex, transactionsClientType }}
        >
            {children}
        </UsersResumeContext.Provider>
    );
};
