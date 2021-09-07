import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from "../utils/queries/get-all-products";
import { ProductConnection } from "../schema";

type ProductApiReturnType = {
    products: ProductConnection
};

const getAllProducts = async (): Promise<any> =>{
    const { data } = await fetchApi<ProductApiReturnType>({query: getAllProductsQuery});
    // @TODO normalize and sreturn new data!
    return data.products;
};

export default getAllProducts;