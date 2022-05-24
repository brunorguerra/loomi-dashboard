import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from "react";
import { Api } from "../../services/Api";

type DashboardProviderProps = {
    children: ReactNode;
};

interface DashboardContextData {
    pageAmountList: number;
    currentPageList: number;
    productsList: ProductData[];
    forwardPage: () => void;
    backPage: () => void;
    findProduct: (nameProduct: string) => void;
}

type ProductData = {
    imagePath: string;
    name: string;
    colors: string[];
    specifications: string[];
    statusItem: boolean;
};

export const DashboardContext = createContext({} as DashboardContextData);

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
    const [productsList, setProductsList] = useState<ProductData[]>([]);
    const [currentPageList, setCurrentPageList] = useState(0);
    const [pageAmountList, setPageAmountList] = useState(0);

    function forwardPage() {
        currentPageList >= 0 &&
            currentPageList < pageAmountList - 1 &&
            setCurrentPageList(currentPageList + 1);
    }
    function backPage() {
        currentPageList > 0 && setCurrentPageList(currentPageList - 1);
    }

    async function getAllProducts() {
        const response = await Api.get("/products");
        const { products } = await response.data;
        sortProductsByGroupOfFive(products);
    }

    async function findProduct(nameProduct: string) {
        const response = await Api.get("/products");
        const { products } = await response.data;

        const handleProductFound = await products.filter(
            (product: ProductData) =>
                product.name
                    .toLowerCase()
                    .trim()
                    .includes(nameProduct.toLowerCase().trim())
        );
        if (handleProductFound !== undefined) {
            setProductsList(handleProductFound);
        }
    }

    function sortProductsByGroupOfFive(list: ProductData[]) {
        setPageAmountList(Math.ceil(list.length / 5));
        const products = list.splice(5 * currentPageList, 5);
        setProductsList(products);
    }

    useEffect(() => {
        getAllProducts();
    }, [currentPageList]);

    return (
        <DashboardContext.Provider
            value={{
                pageAmountList,
                currentPageList,
                productsList,
                backPage,
                forwardPage,
                findProduct,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
