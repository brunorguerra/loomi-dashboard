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
        const avgTicketDay = await getDataOfRequest("/avg-ticket-day");
        const avgTicketMonth = await getDataOfRequest("/avg-ticket-month");
        const ordersMonth = await getDataOfRequest("/orders-month");
        const sellsMonth = await getDataOfRequest("/sells-month");
        const [alertMaintenance, alertRunOutStock] = await getDataOfRequest(
            "/alerts"
        );

        setTicketDay(avgTicketDay);
        setTicketMonth(avgTicketMonth);
        setOrdersMonth(ordersMonth);
        setSellsMonth(sellsMonth);
        setMaintenanceProducts(alertMaintenance);
        setRunningOutStock(alertRunOutStock);
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
