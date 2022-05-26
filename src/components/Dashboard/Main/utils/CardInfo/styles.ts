import styled from "styled-components";

export const Container = styled.div`
    min-width: 25rem;
    max-width: 25rem;

    height: 17rem;

    background-color: var(--shape);
    border-radius: 1.5rem;
    padding: 2.5rem 1.6rem;
    box-shadow: 0 0.3rem 0.5rem var(--boxShadow);

    h3 {
        color: var(--title);
        font-weight: bold;
        font-size: 1.6rem;
    }
    .growth {
        margin-top: 1.2rem;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        box-shadow: 0 0 2rem var(--boxShadow);
        display: inline-block;
        p {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--green);
        }
    }
    .warning {
        margin-top: 1rem;
        p {
            font-size: 1.4rem;
            color: var(--green);
        }
    }
    .amount {
        margin-top: 1.8rem;
        p {
            display: flex;
            align-items: center;
            gap: 1rem;
            span {
                color: var(--title);
                &:first-of-type {
                    font-size: 1.6rem;
                }
                &:last-of-type {
                    font-size: 2rem;
                    font-weight: bold;
                }
            }
        }
    }
`;
