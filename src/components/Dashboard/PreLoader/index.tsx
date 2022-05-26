import { BiLoaderAlt } from "react-icons/bi";
import { Container } from "./styles";

export const PreLoader = () => {
    return (
        <Container>
            <BiLoaderAlt size={100} className="iconLoader" color="#5A4CA7" />
        </Container>
    );
};
