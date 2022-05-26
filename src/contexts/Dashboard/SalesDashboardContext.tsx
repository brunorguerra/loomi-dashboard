import { createContext, useCallback, useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { ProviderPropsType } from "../../types/DashboardTypes";
import { returnValueOfArray } from "./utils";

interface SalesDashboardContextData {
    sellsMonth: number[];
    profitMonth: number[];
    expectationProfitMonth: number[];
    ordersMonth: number[];
    canceledOrdersMonth: number[];
}

export const SalesDashboardContext = createContext(
    {} as SalesDashboardContextData
);

export const SalesDashboardProvider = ({ children }: ProviderPropsType) => {
    const [sellsMonth, setSellsMonth] = useState<number[]>([]);
    const [profitMonth, setProfitMonth] = useState<number[]>([]);
    const [expectationProfitMonth, setExpectationProfitMonth] = useState<
        number[]
    >([]);
    const [ordersMonth, setOrdersMonth] = useState<number[]>([]);
    const [canceledOrdersMonth, setCanceledOrdersMonth] = useState<number[]>(
        []
    );

    const getAllSalesDashboardData = useCallback(async () => {
        try {
            const endpoints: { main: string }[] = [
                { main: "/sells-per-month" },
                { main: "/profit-per-month" },
                { main: "/profit-expectation-per-month" },
                { main: "/orders-per-month" },
                { main: "/canceled-orders-per-month" },
            ];

            const promises = endpoints.map(async (endpoint) => {
                const req = await Api.get(endpoint.main);
                return req.data;
            });

            const [
                sellsMonthData,
                profitMonthData,
                expectationProfitMonthData,
                ordersMonthData,
                canceledOrdersMonthData,
            ] = await Promise.all(promises);

            setSellsMonth(returnValueOfArray(sellsMonthData));
            setProfitMonth(returnValueOfArray(profitMonthData));
            setExpectationProfitMonth(
                returnValueOfArray(expectationProfitMonthData)
            );
            setOrdersMonth(returnValueOfArray(ordersMonthData));
            setCanceledOrdersMonth(returnValueOfArray(canceledOrdersMonthData));
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        return () => {
            getAllSalesDashboardData();
        };
    }, [getAllSalesDashboardData]);

    return (
        <SalesDashboardContext.Provider
            value={{
                sellsMonth,
                profitMonth,
                expectationProfitMonth,
                ordersMonth,
                canceledOrdersMonth,
            }}
        >
            {children}
        </SalesDashboardContext.Provider>
    );
};
