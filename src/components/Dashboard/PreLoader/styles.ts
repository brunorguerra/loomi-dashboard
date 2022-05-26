import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: fixed;
    z-index: 999999999 !important;
    inset: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .iconLoader {
        animation: loading 1s linear infinite;
        @keyframes loading {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;
