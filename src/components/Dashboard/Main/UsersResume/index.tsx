import { Container } from "./styles";
// Contexts
import { useContext } from "react";
import { UsersResumeContext } from "../../../../contexts/Dashboard/UsersResumeContext";

// Components
import { CardChart } from "../utils/CardChart";
import { TitleSection } from "../utils/TitleSection";

// Charts Components
import { AgeTransactionChart } from "./Charts/AgeTransactionChart";
import { CustomerTransactionChart } from "./Charts/CustomerTransactionChart";
import { DeviceTransactionChart } from "./Charts/DeviceTransactionChart";
import { GenreSessionsChart } from "./Charts/GenreSessionsChart";

export const UsersResume = () => {
    const { transactionsAge, sessionsSex, transactionsClientType } =
        useContext(UsersResumeContext);

    return (
        <Container>
            <TitleSection>Perfil do usuário</TitleSection>
            <div className="content-userProfile">
                <CardChart key={Math.random()}>
                    <AgeTransactionChart data={transactionsAge} />
                </CardChart>

                <CardChart key={Math.random()}>
                    <GenreSessionsChart data={sessionsSex} />
                </CardChart>

                <CardChart key={Math.random()}>
                    <CustomerTransactionChart data={transactionsClientType} />
                </CardChart>

                <CardChart key={Math.random()}>
                    <DeviceTransactionChart />
                </CardChart>
            </div>
        </Container>
    );
};
