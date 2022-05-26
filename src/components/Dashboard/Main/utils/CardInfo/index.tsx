import { Container } from "./styles";

interface CardInfoProps {
    title: string;
    growth?: number;
    date?: string;
    description?: string;
    amount: string;
    color: string;
}

export const CardInfo = ({
    title,
    description,
    growth,
    date,
    amount,
    color,
}: CardInfoProps) => {
    function formatGrowth() {
        if (growth !== undefined && growth > 0) {
            return `+ ${growth} %`;
        } else if (growth !== undefined) {
            return `- ${Math.abs(growth)} %`;
        }
    }

    function previousTime(since: string) {
        const date = new Date();
        const sinceArray = since?.split("-");

        if (Number(sinceArray[0]) === date.getFullYear()) {
            if (Number(sinceArray[1]) === date.getMonth() + 1) {
                return `há ${date.getDate() - Number(sinceArray[2])} dias`;
            } else {
                return `há ${
                    date.getMonth() + 1 - Number(sinceArray[1])
                } meses`;
            }
        }
    }

    return (
        <Container>
            <h3>{title}</h3>
            <div className="growth">
                <p style={{ color }}>
                    {!growth ? previousTime(String(date)) : formatGrowth()}
                </p>
            </div>
            <div className="warning">
                <p style={{ color }}>{description}</p>
            </div>
            <div className="amount">
                <p>{amount}</p>
            </div>
        </Container>
    );
};
