import { useContext, useRef } from "react";
import { ProductsListContext } from "../../../../contexts/Dashboard/ProductsListContext";
import { LoadingList } from "./LoadingList";
import { PaginationProductList } from "./PaginationProductList";
import { Container } from "./styles";
import { TableItem } from "./TableItem";

export const ProductsList = () => {
    const {
        productsList,
        currentPage,
        totalPages,
        loadingList,
        backPage,
        forwardPage,
        findProduct,
    } = useContext(ProductsListContext);
    const inputProductsRef = useRef<HTMLInputElement>(null);

    return (
        <Container>
            <div className="header-productsList">
                <h2>Listagem de Produtos</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Pesquisar produtos"
                        ref={inputProductsRef}
                    />
                    <button
                        type="submit"
                        onClick={() =>
                            findProduct(String(inputProductsRef.current?.value))
                        }
                    >
                        <img src="./assets/search.svg" alt="Pesquisar" />
                    </button>
                </form>
            </div>

            <div className="content-productsList">
                {loadingList ? (
                    <LoadingList />
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Produto</th>

                                <th className="empty"></th>

                                <th>Cores</th>

                                <th className="separator">
                                    <div className="line"></div>
                                </th>

                                <th>Especificações</th>

                                <th className="separator">
                                    <div className="line"></div>
                                </th>

                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {productsList.map((product, index) => (
                                <TableItem
                                    key={index}
                                    product={product.name}
                                    color={product.color}
                                    status={product.status}
                                />
                            ))}
                            {totalPages === 0 && (
                                <tr className="productNotFound">
                                    <td>
                                        <p>Produto não encontrado</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
            <PaginationProductList
                currentPage={currentPage}
                totalPage={totalPages}
                backFunction={backPage}
                forwardFunction={forwardPage}
            />
        </Container>
    );
};
