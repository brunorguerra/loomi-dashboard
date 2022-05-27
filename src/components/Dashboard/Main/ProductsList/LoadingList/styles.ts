import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .iconLoad {
        color: var(--purple);
        animation: rotate 1.7s linear infinite;
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;
