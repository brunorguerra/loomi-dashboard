import { CardChart } from "../utils/CardChart";
import { TitleSection } from "../utils/TitleSection";
import { AgeTransactionChart } from "./Charts/AgeTransactionChart";
import { CustomerTransactionChart } from "./Charts/CustomerTransactionChart";
import { DeviceTransactionChart } from "./Charts/DeviceTransactionChart";
import { GenreSessionsChart } from "./Charts/GenreSessionsChart";
import { Container } from "./styles";

export const UserProfile = () => {
    return (
        <Container>
            <TitleSection>Perfil do usuário</TitleSection>
            <div className="content-userProfile">
                <CardChart key={Math.random()}>
                    <AgeTransactionChart />
                </CardChart>

                <CardChart key={Math.random()}>
                    <GenreSessionsChart />
                </CardChart>

                <CardChart key={Math.random()}>
                    <CustomerTransactionChart />
                </CardChart>

                <CardChart key={Math.random()}>
                    <DeviceTransactionChart />
                </CardChart>
            </div>
        </Container>
    );
};
