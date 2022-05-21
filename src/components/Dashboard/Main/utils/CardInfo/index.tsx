import { Container } from "./styles";

export const CardInfo = () => {
    return (
        <Container>
            <h3>Ticket médio últimas 24h</h3>
            <div className="countdown">
                <p>+ 15 %</p>
            </div>
            <div className="warning">
                <p>em relação a ontem</p>
            </div>
            <div className="amount">
                <p>
                    <span>R$</span>
                    <span>9.292,00</span>
                </p>
            </div>
        </Container>
    );
};
