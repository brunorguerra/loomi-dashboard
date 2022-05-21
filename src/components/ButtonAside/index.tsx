import { Container } from "./styles";

interface ButtonAsideProps {
    pathIcon: string;
    isActive: boolean;
}

export const ButtonAside = ({ pathIcon, isActive }: ButtonAsideProps) => {
    return (
        <Container isActive={isActive}>
            <img src={pathIcon} alt="" />
        </Container>
    );
};
