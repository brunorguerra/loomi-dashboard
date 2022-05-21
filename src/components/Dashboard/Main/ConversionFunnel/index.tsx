import { CardInfo } from "../utils/CardInfo";
import { TitleSection } from "../utils/TitleSection";
import { Container } from "./styles";

export const ConversionFunnel = () => {
    return (
        <Container>
            <TitleSection>Funil de conversão</TitleSection>
            <div className="content-conversionFunnel">
                <CardInfo />
                <CardInfo />
                <CardInfo />
                <CardInfo />
                <CardInfo />
            </div>
        </Container>
    );
};
