import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    .title-home {
        padding: 4.5rem 4rem 3.2rem;
        h2 {
            color: var(--title);
            font-size: 2.8rem;
            font-weight: bold;
        }
    }
    .content-home {
        display: flex;
        align-items: center;
        gap: 3.2rem;
        overflow-x: auto;
    }
`;
