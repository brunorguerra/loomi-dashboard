import styled from "styled-components";

export const Container = styled.aside`
    width: 8.8rem;
    height: 96.4rem;

    position: absolute;
    top: 10rem;
    left: 1.6rem;
    bottom: 1.6rem;

    background-color: var(--shape);
    border-radius: 0.8rem;
    box-shadow: 0px 3px 6px var(--boxShadow);

    padding: 2.6rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2.4rem;
    overflow-y: auto;

    div.lineSeparator {
        margin-bottom: 0.6rem;
        width: 100%;
        border: 1px solid var(--boxShadow);
    }
`;
