import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    display: flex;
    align-items: center;
    gap: 1.6rem;
    justify-content: flex-end;

    .pageList {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        p {
            color: var(--input-textOpacity);
            font-size: 1.6rem;
        }
    }
    .pageButtons {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        button {
            width: 3rem;
            height: 3rem;
            img {
                max-width: 100%;
                width: auto;
                transition: all 0.25s ease;
            }
            &:active {
                img {
                    transform: scale(1.2);
                }
            }
        }
    }
`;
