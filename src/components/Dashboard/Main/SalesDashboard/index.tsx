import { TitleSection } from "../utils/TitleSection";
import { CardChart } from "../utils/CardChart";
import { Container } from "./styles";
import { MonthOrdersChart } from "./Charts/MonthOrdersChart";
import { ProfitExpectationChart } from "./Charts/ProfitExpectationChart";
import { MadeOrdersChart } from "./Charts/MadeOrdersChart";
import { CategoryOrdersChart } from "./Charts/CategoryOrdersChart";
import { useContext } from "react";
import { SalesDashboardContext } from "../../../../contexts/Dashboard/SalesDashboardContext";

export const SalesDashboard = () => {
    const {
        sellsMonth,
        profitMonth,
        expectationProfitMonth,
        ordersMonth,
        canceledOrdersMonth,
    } = useContext(SalesDashboardContext);

    return (
        <Container>
            <TitleSection>Dashboard de vendas</TitleSection>
            <div className="content-sales">
                <CardChart key={Math.random()}>
                    <MonthOrdersChart data={sellsMonth} />
                </CardChart>

                <CardChart key={Math.random()}>
                    <ProfitExpectationChart
                        profit={profitMonth}
                        expectationProfit={expectationProfitMonth}
                    />
                </CardChart>

                <CardChart key={Math.random()}>
                    <MadeOrdersChart
                        madeOrders={ordersMonth}
                        canceledOrders={canceledOrdersMonth}
                    />
                </CardChart>

                <CardChart key={Math.random()}>
                    <CategoryOrdersChart />
                </CardChart>
            </div>
        </Container>
    );
};
