import { useContext, useRef } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext";
import { PaginationProductList } from "./PaginationProductList";
import { Container } from "./styles";
import { TableItem } from "./TableItem";

export const ProductsList = () => {
    const {
        productsList,
        currentPageList,
        pageAmountList,
        backPage,
        forwardPage,
        findProduct,
    } = useContext(DashboardContext);
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
                                productImagePath={product.imagePath}
                                product={product.name}
                                colors={product.colors}
                                specifications={product.specifications}
                                status={product.statusItem}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            <PaginationProductList
                currentPage={currentPageList + 1}
                totalPage={pageAmountList}
                backFunction={backPage}
                forwardFunction={forwardPage}
            />
        </Container>
    );
};
