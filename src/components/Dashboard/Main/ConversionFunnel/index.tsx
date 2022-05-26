import { useContext } from "react";
import { ConversionFunnelContext } from "../../../../contexts/Dashboard/ConversionFunnelContext";
import { getPreviousMonth } from "../InfoResume";
import { CardInfo } from "../utils/CardInfo";
import { TitleSection } from "../utils/TitleSection";
import { Container } from "./styles";

export const ConversionFunnel = () => {
    const {
        totalDay,
        productsViewMonth,
        productPageConversionMonth,
        addCartMonth,
        checkoutEmailMonth,
        checkoutRegistrationMonth,
        checkoutShippingMonth,
    } = useContext(ConversionFunnelContext);

    return (
        <Container>
            <TitleSection>Funil de conversão</TitleSection>
            <div className="content-conversionFunnel">
                <CardInfo
                    title="Sessões"
                    growth={totalDay.growth}
                    description="em relação a ontem"
                    amount={`${totalDay.value} visualizações`}
                    color={totalDay.growth < 0 ? "#D6628E" : "#109E8E"}
                />
                <CardInfo
                    title="Visualizações de Produto"
                    growth={productsViewMonth.growth}
                    description={`em relação a ${getPreviousMonth()}`}
                    amount={`${productsViewMonth.value} visualizações`}
                    color={productsViewMonth.growth < 0 ? "#D6628E" : "#109E8E"}
                />
                <CardInfo
                    title="Conversão  de produtos"
                    growth={productPageConversionMonth.growth}
                    description={`em relação a ${getPreviousMonth()}`}
                    amount={`${productPageConversionMonth.value} %`}
                    color={
                        productPageConversionMonth.growth < 0
                            ? "#D6628E"
                            : "#109E8E"
                    }
                />
                <CardInfo
                    title="Adições ao Carrinho"
                    growth={addCartMonth.growth}
                    description={`em relação a ${getPreviousMonth()}`}
                    amount={`${addCartMonth.value} produtos`}
                    color={addCartMonth.growth < 0 ? "#D6628E" : "#109E8E"}
                />
                <CardInfo
                    title="Checkout - Frete"
                    growth={checkoutShippingMonth.growth}
                    description={`em relação a ${getPreviousMonth()}`}
                    amount={`${checkoutShippingMonth.value} usuários`}
                    color={
                        checkoutShippingMonth.growth < 0 ? "#D6628E" : "#109E8E"
                    }
                />
                <CardInfo
                    title="Checkout - E-mail"
                    growth={checkoutEmailMonth.growth}
                    description={`em relação a ${getPreviousMonth()}`}
                    amount={`${checkoutEmailMonth.value} usuários`}
                    color={
                        checkoutEmailMonth.growth < 0 ? "#D6628E" : "#109E8E"
                    }
                />
                <CardInfo
                    title="Checkout - Cadastro"
                    growth={checkoutRegistrationMonth.growth}
                    description={`em relação a ${getPreviousMonth()}`}
                    amount={`${checkoutRegistrationMonth.value} usuários`}
                    color={
                        checkoutRegistrationMonth.growth < 0
                            ? "#D6628E"
                            : "#109E8E"
                    }
                />
            </div>
        </Container>
    );
};
