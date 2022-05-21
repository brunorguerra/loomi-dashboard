import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Header = () => {
    return (
        <Container>
            <Link to={"/"} className="link">
                <img src="./assets/logo.svg" alt="" />
            </Link>

            <div className="profile">
                <p>Nome</p>
                <div className="circle">
                    <p>N</p>
                </div>
            </div>
        </Container>
    );
};
