import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Header = () => {
    return (
        <Container>
            <Link to={"/"} className="link-header">
                <img src="./assets/logo.svg" alt="" />
            </Link>

            <div className="profile-header">
                <p>Nome</p>
                <div className="circle">
                    <p>N</p>
                </div>
            </div>
        </Container>
    );
};
