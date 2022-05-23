import { PaginationProductList } from "./PaginationProductList";
import { Container } from "./styles";
import { TableItem } from "./TableItem";

export const ProductsList = () => {
    return (
        <Container>
            <div className="header-productsList">
                <h2>Listagem de Produtos</h2>
                <form>
                    <input type="text" placeholder="Pesquisar produtos" />
                    <button type="submit">
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
                        <TableItem
                            productImagePath="banco.png"
                            product="Banco Cajá"
                            colors={["Madeira Escura;"]}
                            specifications={["braço", "sem braço", "sem braço"]}
                            status={true}
                        />
                        <TableItem
                            productImagePath="banco.png"
                            product="Banco Cajá"
                            colors={["Madeira Escura;"]}
                            specifications={["braço", "sem braço", "sem braço"]}
                            status={true}
                        />
                        <TableItem
                            productImagePath="banco.png"
                            product="Banco Cajá"
                            colors={["Madeira Escura;"]}
                            specifications={["braço", "sem braço", "sem braço"]}
                            status={true}
                        />
                    </tbody>
                </table>
            </div>

            <PaginationProductList />
        </Container>
    );
};
