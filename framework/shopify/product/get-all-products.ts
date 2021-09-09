import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from "../utils/queries/get-all-products";
import { ProductConnection } from "../schema";

type ProductApiReturnType = {
    products: ProductConnection
};

const getAllProducts = async (): Promise<any> =>{
    
    const { data } = await fetchApi<ProductApiReturnType>({query: getAllProductsQuery});
    // (normalize and return new data) -> map over [edges] on [productConnection] and return [node] or empty array
        const products = data.products.edges.map(({ node: product })=>{
            return product }) ?? []
        ;
    // (normalize and return new data) -> map over [edges] on [productConnection] and return [node] or empty array
    
    return products;
};

export default getAllProducts;