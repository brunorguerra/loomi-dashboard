import { Container } from "./styles";

export const PaginationProductList = () => {
    return (
        <Container>
            <div className="pageList">
                <p>1</p>
                <p>de</p>
                <p>40</p>
            </div>
            <div className="pageButtons">
                <button className="back-page">
                    <img src="./assets/back.svg" alt="" />
                </button>
                <button className="forward-page">
                    <img src="./assets/forward.svg" alt="" />
                </button>
            </div>
        </Container>
    );
};
