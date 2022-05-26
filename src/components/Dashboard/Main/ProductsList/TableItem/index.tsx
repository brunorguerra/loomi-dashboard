import { CardSpecification } from "../CardSpecification";
import { Item } from "./styles";

interface TableItemProps {
    product: string;
    color: string;
    status: string;
}

export const TableItem = ({ product, color, status }: TableItemProps) => {
    return (
        <Item>
            <td>
                <div className="product">
                    <p>{product}</p>
                </div>
            </td>

            <td className="empty"></td>

            <td>
                <div className="colors">
                    <p>{color}</p>
                </div>
            </td>
            <td className="empty"></td>

            <td>
                <div className="specifications"></div>
            </td>

            <td className="empty"></td>

            <td>
                <div className="status">
                    <p>{status}</p>
                    <img src="./assets/active.svg" alt={status} />
                </div>
            </td>
        </Item>
    );
};
