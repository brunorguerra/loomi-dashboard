import { Container } from "./styles";
import { Home } from "./Home";
import { Sales } from "./Sales";
import { ConversionFunnel } from "./ConversionFunnel";
import { UserProfile } from "./UserProfile";
import { ProductsList } from "./ProductsList";

export const Main = () => {
    return (
        <Container>
            <Home />
            <Sales />
            <ConversionFunnel />
            <UserProfile />
            <ProductsList />
        </Container>
    );
};
