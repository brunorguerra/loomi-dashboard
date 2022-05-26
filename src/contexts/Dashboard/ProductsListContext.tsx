import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { ProviderPropsType } from "../../types/DashboardTypes";

interface ProductsListContextData {
    productsList: ProductsListData[];
    currentPage: number;
    totalPages: number;
    forwardPage: () => void;
    backPage: () => void;
    findProduct: (value: string) => void;
}

type ProductsListData = {
    name: string;
    color: string;
    status: string;
};

export const ProductsListContext = createContext({} as ProductsListContextData);

export const ProductsListProvider = ({ children }: ProviderPropsType) => {
    const [productsList, setProductsList] = useState<ProductsListData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    function forwardPage() {
        currentPage < totalPages && setCurrentPage(currentPage + 1);
    }

    function backPage() {
        currentPage > 1 && setCurrentPage(currentPage - 1);
    }

    function findProduct(value: string) {
        getAllProducts(value);
    }

    async function getAllProducts(valueSearch: string) {
        try {
            const { data: dataTotal } = await Api.get("/products", {
                params: { search: valueSearch },
            });
            const { data } = await Api.get("/products", {
                params: { page: currentPage, limit: 7, search: valueSearch },
            });
            setTotalPages(Math.ceil(dataTotal.length / 7));
            setProductsList(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllProducts("");
    }, [currentPage]);

    return (
        <ProductsListContext.Provider
            value={{
                productsList,
                currentPage,
                totalPages,
                backPage,
                forwardPage,
                findProduct,
            }}
        >
            {children}
        </ProductsListContext.Provider>
    );
};
