import { ButtonAside } from "../ButtonAside";
import { Container } from "./styles";

export const Aside = () => {
    return (
        <Container>
            <ButtonAside pathIcon={"./assets/menu.svg"} isActive={false} />
            <div className="lineSeparator">
                <span></span>
            </div>
            <ButtonAside pathIcon={"./assets/home.svg"} isActive={true} />
            <ButtonAside pathIcon={"./assets/cat.svg"} isActive={false} />
            <ButtonAside pathIcon={"./assets/services.svg"} isActive={false} />
            <ButtonAside pathIcon={"./assets/log.svg"} isActive={false} />
            <ButtonAside pathIcon={"./assets/buy.svg"} isActive={false} />
            <ButtonAside pathIcon={"./assets/card.svg"} isActive={false} />
            <ButtonAside pathIcon={"./assets/text.svg"} isActive={false} />
            <ButtonAside pathIcon={"./assets/person.svg"} isActive={false} />
            <ButtonAside pathIcon={"./assets/gear.svg"} isActive={false} />
        </Container>
    );
};
