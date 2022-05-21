import { CardInfo } from "../utils/CardInfo";
import { Container } from "./styles";

export const Home = () => {
    return (
        <Container>
            <div className="title-home">
                <h2>Início</h2>
            </div>
            <div className="content-home">
                <CardInfo />
                <CardInfo />
                <CardInfo />
                <CardInfo />
                <CardInfo />
            </div>
        </Container>
    );
};
