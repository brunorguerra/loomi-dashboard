import { ReactNode } from "react";
import { Container } from "./style";

export const CardSpecification = ({ children }: { children: ReactNode }) => {
    return (
        <Container>
            <p>{children}</p>
        </Container>
    );
};
