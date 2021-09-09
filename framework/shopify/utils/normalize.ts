import { ImageEdge, Product as ShopifyProduct } from "../schema";

function normalizeProductImages({edges}: {edges: Array<ImageEdge>}){

    return edges.map(({ node: { originalSrc: url, ...rest } })=>{

        return {
            url: `/images/${url}`,
            ...rest
        };

    });

};

export function normalizeProduct(productNode: ShopifyProduct): any{

    // Destructuring [productNode] properties
        const {
            id, title: name, handle,
            vendor, description, images: imageConnection,
            ...rest
        } = productNode;
    // Destructuring [productNode] properties

    // Creating new product from [productNode] properties
        const product = {
            id, name, vendor,
            description, path: `/${handle}`,
            slug: handle.replace(/^\/+|\/+$/g, ''),
            images: normalizeProductImages(imageConnection),
            ...rest
        };
    // Creating new product from [productNode] properties

    return product;

};