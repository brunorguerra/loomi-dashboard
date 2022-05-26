import { useContext } from "react";
import { InfoResumeContext } from "../../../../contexts/Dashboard/InfoResumeContext";
import { CardInfo } from "../utils/CardInfo";
import { Container } from "./styles";

export function getPreviousMonth() {
    const date = new Date();
    const currentMonth = date.getMonth();

    const monthOfYear = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
    ];

    return monthOfYear[currentMonth - 1];
}

export const InfoResume = () => {
    const {
        ticketDay,
        ticketMonth,
        ordersMonth,
        sellsMonth,
        maintenanceProducts,
        runningOutStock,
    } = useContext(InfoResumeContext);

    function formatCurrent(value: number | string) {
        let signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "");
        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        return signal + value;
    }

    return (
        <Container>
            <div className="title-home">
                <h2>Início</h2>
            </div>
            <div className="content-home">
                <CardInfo
                    title="Ticket médio últimas 24h"
                    growth={ticketDay.growth}
                    amount={formatCurrent(ticketDay.value)}
                    description="em relação a ontem"
                    color={ticketDay.growth < 0 ? "#D6628E" : "#109E8E"}
                />
                <CardInfo
                    title="Ticket médio mensal"
                    growth={ticketMonth.growth}
                    amount={formatCurrent(ticketMonth.value)}
                    description={`em relação a ${getPreviousMonth()}`}
                    color={ticketMonth.growth < 0 ? "#D6628E" : "#109E8E"}
                />
                <CardInfo
                    title="Produtos em manutenção"
                    date={maintenanceProducts.since}
                    amount={`${maintenanceProducts.value} produtos`}
                    description=""
                    color={
                        maintenanceProducts.value > 0 ? "#D6628E" : "#109E8E"
                    }
                />
                <CardInfo
                    title="Acabando o estoque"
                    date={runningOutStock.since}
                    amount={`${runningOutStock.value} produtos`}
                    description={
                        runningOutStock.value ? "repor o quanto antes" : ""
                    }
                    color={runningOutStock.value > 0 ? "#D6628E" : "#109E8E"}
                />
                <CardInfo
                    title="Pedidos realizados no mês"
                    growth={ordersMonth.growth}
                    amount={`${ordersMonth.value} pedidos`}
                    description={`em relação a ${getPreviousMonth()}`}
                    color={ordersMonth.growth < 0 ? "#D6628E" : "#109E8E"}
                />
                <CardInfo
                    title="Produtos vendidos no mês"
                    growth={sellsMonth.growth}
                    amount={`${sellsMonth.value} produtos`}
                    description={`em relação a ${getPreviousMonth()}`}
                    color={sellsMonth.growth < 0 ? "#D6628E" : "#109E8E"}
                />
            </div>
        </Container>
    );
};
