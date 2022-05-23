import { Container } from "./styles";

interface CardInfoProps {
    title: string;
    amount: string;
    description?: string;
}

export const CardInfo = ({ title, description, amount }: CardInfoProps) => {
    return (
        <Container>
            <h3>{title}</h3>
            <div className="countdown">
                <p>{amount}</p>
            </div>
            <div className="warning">
                <p>{description}</p>
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
