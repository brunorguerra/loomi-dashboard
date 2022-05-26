import { Api } from "../../services/Api";

export const getDataOfRequest = async (endpoint: string) => {
    try {
        const { data } = await Api.get(endpoint);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export function returnValueOfArray(array: { value: number }[]) {
    const newArray = array.map((item) => item.value);
    return newArray;
}
