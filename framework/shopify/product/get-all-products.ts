import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from "../utils/queries/get-all-products";

const getAllProducts = async (): Promise<number[]> =>{
    const products = await fetchApi({query: getAllProductsQuery});
    return products.data;
};

export default getAllProducts;