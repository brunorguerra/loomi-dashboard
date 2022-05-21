import styled from "styled-components";

interface ContainerProps {
    isActive: boolean;
}

export const Container = styled.button<ContainerProps>`
    min-width: 4rem;
    min-height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ isActive }) =>
        isActive ? "var(--purple)" : "transparent"};

    border-radius: 0.6rem;
`;
