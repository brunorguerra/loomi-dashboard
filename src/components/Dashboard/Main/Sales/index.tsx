import { TitleSection } from "../utils/TitleSection";
import { CardChart } from "../utils/CardChart";
import { Container } from "./styles";

export const Sales = () => {
    return (
        <Container>
            <TitleSection>Dashboard de vendas</TitleSection>
            <div className="content-sales">
                <CardChart />
                <CardChart />
                <CardChart />
                <CardChart />
            </div>
        </Container>
    );
};
