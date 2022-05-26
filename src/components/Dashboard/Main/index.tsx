import { Container } from "./styles";

// Components
import { InfoResume } from "./InfoResume";
import { SalesDashboard } from "./SalesDashboard";
import { ConversionFunnel } from "./ConversionFunnel";
import { UsersResume } from "./UsersResume";
import { ProductsList } from "./ProductsList";

// Contexts
import { ProductsListProvider } from "../../../contexts/Dashboard/ProductsListContext";
import { SalesDashboardProvider } from "../../../contexts/Dashboard/SalesDashboardContext";
import { UsersResumeProvider } from "../../../contexts/Dashboard/UsersResumeContext";
import { InfoResumeProvider } from "../../../contexts/Dashboard/InfoResumeContext";
import { ConversionFunnelProvider } from "../../../contexts/Dashboard/ConversionFunnelContext";

export const Main = () => {
    return (
        <Container>
            <InfoResumeProvider>
                <InfoResume />
            </InfoResumeProvider>

            <SalesDashboardProvider>
                <SalesDashboard />
            </SalesDashboardProvider>

            <ConversionFunnelProvider>
                <ConversionFunnel />
            </ConversionFunnelProvider>

            <UsersResumeProvider>
                <UsersResume />
            </UsersResumeProvider>

            <ProductsListProvider>
                <ProductsList />
            </ProductsListProvider>
        </Container>
    );
};
