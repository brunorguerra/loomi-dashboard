import { Container } from "./styles";

type PaginationProductListProps = {
    currentPage: number;
    totalPage: number;
    backFunction: () => void;
    forwardFunction: () => void;
};

export const PaginationProductList = ({
    currentPage,
    totalPage,
    backFunction,
    forwardFunction,
}: PaginationProductListProps) => {
    return (
        <Container>
            <div className="pageList">
                <p>{currentPage}</p>
                <p>de</p>
                <p>{totalPage}</p>
            </div>
            <div className="pageButtons">
                <button className="back-page" onClick={backFunction}>
                    <img src="./assets/back.svg" alt="" />
                </button>
                <button className="forward-page" onClick={forwardFunction}>
                    <img src="./assets/forward.svg" alt="" />
                </button>
            </div>
        </Container>
    );
};
