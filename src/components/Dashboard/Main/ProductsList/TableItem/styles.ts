import styled from "styled-components";

export const Item = styled.tr`
    td {
        min-width: 30rem;
        border-bottom: 1px solid var(--boxShadow);
        padding: 3.2rem 8rem 3.2rem 4rem;

        p {
            white-space: nowrap;
            font-size: 2rem;
            color: var(--input-text);
            text-transform: capitalize;
        }

        .product {
            display: flex;
            align-items: center;
            gap: 2.4rem;
            img {
                width: 8rem;
                height: 8rem;
            }
        }
        .colors {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            gap: 1rem;
        }
        .specifications {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            gap: 0.8rem;
        }
        .status {
            display: flex;
            align-items: center;
        }

        &.empty {
            min-width: 0;
            padding: 0 2rem;
        }
        &:last-of-type {
            min-width: 15rem;
        }
    }
    &.productNotFound {
        width: 100%;
        text-align: left;
        text-transform: uppercase;
        font-size: 1.8rem;
        padding: 6rem 0 6rem 4rem;
    }
`;
