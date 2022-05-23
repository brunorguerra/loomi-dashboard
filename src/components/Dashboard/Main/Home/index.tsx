import { CardInfo } from "../utils/CardInfo";
import { Container } from "./styles";

export const Home = () => {
    return (
        <Container>
            <div className="title-home">
                <h2>Início</h2>
            </div>
            <div className="content-home">
                <CardInfo
                    title="Ticket médio últimas 24h"
                    amount="+ 15 %"
                    description="em relação a ontem"
                />
                <CardInfo
                    title="Ticket médio mensal"
                    amount="+ 15 %"
                    description="em relação a julho"
                />
                <CardInfo title="Produtos em manutenção" amount="há 5 dias" />
                <CardInfo
                    title="Acabando o estoque"
                    amount="há 5 dias"
                    description="repor o quanto antes"
                />
                <CardInfo
                    title="Pedidos realizados no mês"
                    amount="+ 15 %"
                    description="em relação a julho"
                />
                <CardInfo
                    title="Produtos vendidos no mês"
                    amount="+ 15 %"
                    description="em relação a julho"
                />
            </div>
        </Container>
    );
};
