import { ReactNode } from "react";
import { Title } from "./styles";

export const TitleSection = ({ children }: { children: ReactNode }) => {
    return (
        <Title>
            <h2>{children}</h2>
        </Title>
    );
};
