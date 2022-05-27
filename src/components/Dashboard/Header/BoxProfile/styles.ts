import styled from "styled-components";

interface ContainerProps {
    isVisibleBox: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 11rem;
    height: 7rem;
    background-color: var(--shape);
    border-radius: 1rem 0 1rem 1rem;
    box-shadow: 0 0.5rem 0.7rem var(--boxShadow);
    position: absolute;
    right: 4rem;
    top: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    opacity: ${({ isVisibleBox }) => (isVisibleBox ? "1" : "0")};
    visibility: ${({ isVisibleBox }) => (isVisibleBox ? "visible" : "hidden")};

    transition: all 0.3s ease;

    button {
        background-color: transparent;
        font-size: 1.8rem;
        color: var(--red);

        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;
