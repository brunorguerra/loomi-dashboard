import { CardSpecification } from "../CardSpecification";
import { Item } from "./styles";

interface TableItemProps {
    productImagePath: string;
    product: string;
    colors: string[];
    specifications: string[];
    status: boolean;
}

export const TableItem = ({
    productImagePath,
    product,
    colors,
    specifications,
    status,
}: TableItemProps) => {
    return (
        <Item>
            <td>
                <div className="product">
                    <img src={`./assets/${productImagePath}`} alt={product} />
                    <p>{product}</p>
                </div>
            </td>

            <td className="empty"></td>

            <td>
                <div className="colors">
                    {colors.map((color) => (
                        <p>{color}</p>
                    ))}
                </div>
            </td>
            <td className="empty"></td>

            <td>
                <div className="specifications">
                    {specifications.map((specification) => (
                        <CardSpecification>{specification}</CardSpecification>
                    ))}
                </div>
            </td>

            <td className="empty"></td>

            <td>
                <div className="status">
                    <p>{status ? "Ativo" : "Inativo"}</p>
                    <img
                        src="./assets/active.svg"
                        alt={status ? "Status Ativo" : "Status Inativo"}
                    />
                </div>
            </td>
        </Item>
    );
};
