import styled from "styled-components";

export const Container = styled.section`
    margin-top: 4rem;
    background-color: var(--shape);
    border-radius: 2rem;
    padding: 5.5rem 4rem;

    .header-productsList {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;

        h2 {
            font-size: 3rem;
            font-weight: normal;
            color: var(--input-text);
        }
        form {
            display: flex;
            align-items: center;

            height: 6rem;
            width: 38.802rem;

            border-radius: 0.8rem;
            background-color: var(--input);
            input {
                flex: 1;
                font-size: 2rem;
                height: 100%;
                padding: 0 4rem;

                background-color: transparent;
                color: var(--input-text);
            }
            button {
                width: 6rem;
                height: 100%;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: transparent;
            }
        }
        @media (max-width: 850px) {
            flex-direction: column;
            justify-content: center;
        }
    }
    .content-productsList {
        margin-top: 5rem;
        width: 100%;
        overflow-x: auto;
        table {
            width: 100%;
            border-spacing: 0;
            thead {
                tr {
                    th {
                        height: 5rem;
                        padding: 0 4rem;

                        background-color: var(--title);
                        color: var(--white);

                        font-size: 1.6rem;
                        font-weight: bold;
                        text-transform: uppercase;
                        text-align: left;

                        &.empty {
                            background-color: transparent;
                            padding: 0 2rem;
                        }
                        &.separator {
                            padding: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            .line {
                                width: 0.1rem;
                                height: 50%;
                                background-color: var(--white);
                            }
                        }

                        &:first-of-type {
                            border-radius: 0.9rem;
                            margin-right: 4rem;
                        }
                        &:nth-of-type(3) {
                            border-radius: 0.9rem 0 0 0.9rem;
                        }
                        &:last-of-type {
                            border-radius: 0 0.9rem 0.9rem 0;
                        }
                    }
                }
            }
            tbody {
                tr {
                    &.productNotFound {
                        width: 100%;
                        text-align: left;
                        text-transform: uppercase;
                        font-size: 1.8rem;
                        padding: 6rem 0 6rem 4rem;
                        td {
                            min-width: 30rem;
                            border-bottom: 1px solid var(--boxShadow);
                            padding: 3.2rem 8rem 3.2rem 4rem;
                            p {
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }
`;
