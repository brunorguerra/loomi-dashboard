import styled from "styled-components";

export const Container = styled.section`
    width: min(90rem, 90%);
    margin: 0 auto;
    background-color: var(--shape);
    .content {
        padding: 4rem;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6.5rem;
        .header {
            text-align: center;
            .image {
                width: 26.3rem;
                img {
                    width: auto;
                    max-width: 100%;
                }
            }
            h2 {
                margin-top: 4.2rem;
                font-size: 2.4rem;
                font-weight: 600;
                font-family: "Nunito Sans", sans-serif;
            }
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 40rem;
            .input-group {
                width: 100%;
                margin-bottom: 3.5rem;
                label {
                    color: var(--input-text);

                    display: block;

                    margin-bottom: 1.2rem;
                    padding-left: 2.4rem;
                }
                input {
                    width: 100%;
                    height: 6rem;

                    padding: 2rem;
                    font-size: 2rem;

                    background-color: var(--input);
                    color: var(--input-text);
                    border-radius: 0.8rem;
                }
                .messageError {
                    width: 100%;
                    height: 3rem;
                    padding: 0.5rem 2.4rem 0;
                    p {
                        color: var(--purple);
                    }
                }
            }
            button {
                margin: 0 auto;

                background-color: var(--purple);
                color: var(--white);
                border-radius: 0.8rem;

                padding: 1rem 3rem;
                font-size: 2rem;

                transition: all 0.2s ease;

                &:hover {
                    opacity: 0.9;
                }
            }
        }
    }
`;
