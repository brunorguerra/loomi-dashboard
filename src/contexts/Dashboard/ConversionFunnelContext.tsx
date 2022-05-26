import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { ProviderPropsType } from "../../types/DashboardTypes";

interface ConversionFunnelContextData {
    totalDay: TicketProps;
    productsViewMonth: TicketProps;
    productPageConversionMonth: TicketProps;
    addCartMonth: TicketProps;
    checkoutEmailMonth: TicketProps;
    checkoutRegistrationMonth: TicketProps;
    checkoutShippingMonth: TicketProps;
}

type TicketProps = {
    value: number;
    growth: number;
};

export const ConversionFunnelContext = createContext(
    {} as ConversionFunnelContextData
);

export const ConversionFunnelProvider = ({ children }: ProviderPropsType) => {
    const [totalDay, setTotalDay] = useState({} as TicketProps);
    const [productsViewMonth, setProductsViewMonth] = useState(
        {} as TicketProps
    );
    const [productPageConversionMonth, setProductPageConversionMonth] =
        useState({} as TicketProps);
    const [addCartMonth, setAddCartMonth] = useState({} as TicketProps);
    const [checkoutEmailMonth, setCheckoutEmailMonth] = useState(
        {} as TicketProps
    );
    const [checkoutRegistrationMonth, setCheckoutRegistrationMonth] = useState(
        {} as TicketProps
    );
    const [checkoutShippingMonth, setCheckoutShippingMonth] = useState(
        {} as TicketProps
    );

    async function getAllConversionFunnelData() {
        try {
            const req = await Api.get("/conversions-resume");
            const {
                "total-per-day": totalPerDay,
                "products-view-per-month": productsViewPerMonth,
                "product-page-conversion-per-month":
                    productPageConversionPerMonth,
                "add-to-cart-per-month": addToCartPerMonth,
                "checkout-email-per-month": checkoutEmailPerMonth,
                "checkout-registration-per-month": checkoutRegistrationPerMonth,
                "checkout-shipping-per-month": checkoutShippingPerMonth,
            } = req.data;

            setTotalDay(totalPerDay);
            setProductsViewMonth(productsViewPerMonth);
            setProductPageConversionMonth(productPageConversionPerMonth);
            setAddCartMonth(addToCartPerMonth);
            setCheckoutEmailMonth(checkoutEmailPerMonth);
            setCheckoutRegistrationMonth(checkoutRegistrationPerMonth);
            setCheckoutShippingMonth(checkoutShippingPerMonth);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        return () => {
            getAllConversionFunnelData();
        };
    }, []);

    return (
        <ConversionFunnelContext.Provider
            value={{
                totalDay,
                productsViewMonth,
                productPageConversionMonth,
                addCartMonth,
                checkoutEmailMonth,
                checkoutRegistrationMonth,
                checkoutShippingMonth,
            }}
        >
            {children}
        </ConversionFunnelContext.Provider>
    );
};
