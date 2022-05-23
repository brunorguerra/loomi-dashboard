import { CardInfo } from "../utils/CardInfo";
import { TitleSection } from "../utils/TitleSection";
import { Container } from "./styles";

export const ConversionFunnel = () => {
    return (
        <Container>
            <TitleSection>Funil de conversão</TitleSection>
            <div className="content-conversionFunnel">
                <CardInfo
                    title="Sessões"
                    amount="+ 15 %"
                    description="em relação a ontem"
                />
                <CardInfo
                    title="Visualizações de Produto"
                    amount="+ 15 %"
                    description="em relação a julho"
                />
                <CardInfo
                    title="Conversão  de produtos"
                    amount="+ 15 %"
                    description="em relação a julho"
                />
                <CardInfo
                    title="Adições ao Carrinho"
                    amount="+ 15 %"
                    description="em relação a julho"
                />
                <CardInfo
                    title="Checkout - Frete"
                    amount="+ 15 %"
                    description="em relação a julho"
                />
                <CardInfo
                    title="Checkout - E-mail"
                    amount="+ 15 %"
                    description="em relação a julho"
                />
            </div>
        </Container>
    );
};
