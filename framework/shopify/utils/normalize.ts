import { ImageEdge, Product as ShopifyProduct } from "../schema";
import { Product } from "../../common/types/product";

const normalizeProductImages = ({edges}: {edges: Array<ImageEdge>}) => 

    edges.map( ({node: {originalSrc: url, ...rest}}) => (
        {
            url: `/images/${url}`,
            ...rest
        }
    ));

;

export function normalizeProduct(productNode: ShopifyProduct): Product{

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