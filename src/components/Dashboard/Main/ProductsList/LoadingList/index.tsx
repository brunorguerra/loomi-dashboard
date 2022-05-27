import { Container } from "./styles";
import { BiLoader } from "react-icons/bi";

export const LoadingList = () => {
    return (
        <Container>
            <BiLoader size={40} className="iconLoad" />
        </Container>
    );
};
