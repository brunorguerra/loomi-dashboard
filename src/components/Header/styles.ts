import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 8.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    background-color: var(--shape);
    box-shadow: 0 0.3rem 0.6rem var(--boxShadow);
    .link {
        width: 7rem;
        img {
            max-width: 100%;
            width: auto;
        }
    }
    .profile {
        display: flex;
        align-items: center;
        gap: 1rem;
        p {
            font-size: 1.6rem;
            color: var(--title);
        }
        .circle {
            width: 4rem;
            height: 4rem;
            background-color: var(--purpleOpacity);
            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;
            p {
                font-size: 2.2rem;
            }
        }
    }
`;
