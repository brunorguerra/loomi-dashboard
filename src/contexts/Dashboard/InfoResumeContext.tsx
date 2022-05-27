import { createContext, useEffect, useState } from "react";
import { ProviderPropsType } from "../../types/DashboardTypes";
import { getDataOfRequest } from "./utils";

interface InfoResumeContextData {
    ticketDay: InfoProps;
    ticketMonth: InfoProps;
    ordersMonth: InfoProps;
    sellsMonth: InfoProps;
    maintenanceProducts: AlertsProps;
    runningOutStock: AlertsProps;
}

type InfoProps = {
    value: number;
    growth: number;
};

type AlertsProps = {
    value: number;
    since: string;
};

export const InfoResumeContext = createContext({} as InfoResumeContextData);

export const InfoResumeProvider = ({ children }: ProviderPropsType) => {
    const [ticketDay, setTicketDay] = useState({} as InfoProps);
    const [ticketMonth, setTicketMonth] = useState({} as InfoProps);
    const [ordersMonth, setOrdersMonth] = useState({} as InfoProps);
    const [sellsMonth, setSellsMonth] = useState({} as InfoProps);
    const [maintenanceProducts, setMaintenanceProducts] = useState(
        {} as AlertsProps
    );
    const [runningOutStock, setRunningOutStock] = useState({} as AlertsProps);

    async function getAllInfoResumeData() {
        const endpoints = [
            "/avg-ticket-day",
            "/avg-ticket-month",
            "/orders-month",
            "/sells-month",
            "/alerts",
        ];

        try {
            const promises = endpoints.map(async (endpoint) => {
                const data = await getDataOfRequest(endpoint);
                return data;
            });
            const [
                avgTicketDay,
                avgTicketMonth,
                ordersMonth,
                sellsMonth,
                alerts,
            ] = await Promise.all(promises);

            setTicketDay(avgTicketDay);
            setTicketMonth(avgTicketMonth);
            setOrdersMonth(ordersMonth);
            setSellsMonth(sellsMonth);
            setMaintenanceProducts(alerts[0]);
            setRunningOutStock(alerts[1]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        return () => {
            getAllInfoResumeData();
        };
    }, []);

    return (
        <InfoResumeContext.Provider
            value={{
                ticketDay,
                ticketMonth,
                ordersMonth,
                sellsMonth,
                maintenanceProducts,
                runningOutStock,
            }}
        >
            {children}
        </InfoResumeContext.Provider>
    );
};
