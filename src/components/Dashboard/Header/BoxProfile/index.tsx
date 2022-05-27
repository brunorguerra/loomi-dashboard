import { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Container } from "./styles";

export const BoxProfile = ({ isVisibleBox }: { isVisibleBox: boolean }) => {
    const { signOut } = useContext(AuthContext);

    return (
        <Container isVisibleBox={isVisibleBox}>
            <button onClick={signOut}>
                <BiLogOut size={25} />
                Sair
            </button>
        </Container>
    );
};
