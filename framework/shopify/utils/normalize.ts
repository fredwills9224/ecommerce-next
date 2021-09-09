import { Product as ShopifyProduct } from "../schema";

export function normalizeProduct(productNode: ShopifyProduct): any{

    // Destructuring [productNode] properties
        const {
            id, title: name, handle,
            vendor, description, ...rest
        } = productNode;
    // Destructuring [productNode] properties

    // Creating new product from [productNode] properties
        const product = {
            id, name, vendor,
            description, path: `/${handle}`,
            slug: handle.replace(/^\/+|\/+$/g, ''),
            ...rest
        };
    // Creating new product from [productNode] properties

    return product;

};