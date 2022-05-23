import { TitleSection } from "../utils/TitleSection";
import { CardChart } from "../utils/CardChart";
import { Container } from "./styles";
import { MonthOrdersChart } from "./Charts/MonthOrdersChart";
import { ProfitExpectationChart } from "./Charts/ProfitExpectationChart";
import { MadeOrdersChart } from "./Charts/MadeOrdersChart";
import { CategoryOrdersChart } from "./Charts/CategoryOrdersChart";

export const Sales = () => {
    return (
        <Container>
            <TitleSection>Dashboard de vendas</TitleSection>
            <div className="content-sales">
                <CardChart key={Math.random()}>
                    <MonthOrdersChart />
                </CardChart>

                <CardChart key={Math.random()}>
                    <ProfitExpectationChart />
                </CardChart>

                <CardChart key={Math.random()}>
                    <MadeOrdersChart />
                </CardChart>

                <CardChart key={Math.random()}>
                    <CategoryOrdersChart />
                </CardChart>
            </div>
        </Container>
    );
};
