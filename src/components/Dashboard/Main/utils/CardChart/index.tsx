import { ReactNode } from "react";
import { Container } from "./styles";

export const CardChart = ({ children }: { children: ReactNode }) => {
    return <Container>{children}</Container>;
};
