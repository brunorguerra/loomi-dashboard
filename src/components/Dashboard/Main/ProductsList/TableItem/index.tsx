import { CardSpecification } from "../CardSpecification";
import { Item } from "./styles";

export const TableItem = () => {
    return (
        <Item>
            <td>
                <div className="product">
                    <img src="./assets/banco.png" alt="" />
                    <p>Banco Cajá</p>
                </div>
            </td>

            <td className="empty"></td>

            <td>
                <div className="colors">
                    <p>Madeira escura; Madeira média</p>
                </div>
            </td>
            <td className="empty"></td>

            <td>
                <div className="specifications">
                    <CardSpecification>braço</CardSpecification>
                    <CardSpecification>sem braço</CardSpecification>
                    <CardSpecification>sem braço</CardSpecification>
                    <CardSpecification>sem braço</CardSpecification>
                </div>
            </td>

            <td className="empty"></td>

            <td>
                <div className="status">
                    <p>Ativo</p>
                    <img src="./assets/active.svg" alt="" />
                </div>
            </td>
        </Item>
    );
};
