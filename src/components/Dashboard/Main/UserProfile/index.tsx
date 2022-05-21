import { CardChart } from "../utils/CardChart";
import { TitleSection } from "../utils/TitleSection";
import { Container } from "./styles";

export const UserProfile = () => {
    return (
        <Container>
            <TitleSection>Perfil do usuário</TitleSection>
            <div className="content-userProfile">
                <CardChart />
                <CardChart />
                <CardChart />
                <CardChart />
                <CardChart />
            </div>
        </Container>
    );
};
