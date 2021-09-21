import { 
    ImageEdge, MoneyV2, Product as ShopifyProduct,
    ProductOption, ProductVariantConnection 
} from "../schema";
import { Product } from "@common/types/product";

const normalizeProductImages = ( {edges}: {edges: Array<ImageEdge>} ) => 
    
    edges.map( ({node: {originalSrc: url, ...rest}}) => (
        {
            url: `/images/${url}`,
            ...rest
        }
    ))

;

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2)=> ({
    value: +amount,
    currencyCode
});

const normalizeProductOption = ({
    id,
    values,
    name: displayName
    }: ProductOption)=>{
    
    const normalized = {
        id,
        displayName,
        values: values.map(value =>{

            let output: any = {
                lable: value
            };
            if(displayName.match(/colou?r/gi)){
                output = {
                    ...output,
                    hexColor: value
                }
            }
            return output;

        })
    };
    console.log('ID: ', id);
    console.log('name: ', displayName);
    console.log('values: ', values);
    return normalized;

};

const normalizeProductVariants = ({edges}: ProductVariantConnection)=>{
    
    return edges.map(({node}) =>{

        const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node;
        return {
            id, name: title, sku: sku || id,
            price: +priceV2.amount,
            listPrice: +compareAtPriceV2?.amount,
            requiresShipping: true
        };

    });

};

export function normalizeProduct(productNode: ShopifyProduct): Product{

    // Destructuring [productNode] properties
        const {
            id, title: name, handle,
            vendor, description, images: imageConnection,
            priceRange, options, variants,
            ...rest
        } = productNode;
    // Destructuring [productNode] properties

    // Creating new product from [productNode] properties
        const product = {
            id, name, vendor,
            description, path: `/${handle}`,
            slug: handle.replace(/^\/+|\/+$/g, ''),
            images: normalizeProductImages(imageConnection),
            price: normalizeProductPrice(priceRange.minVariantPrice),
            options: options ? 
                options.filter(o => o.name !== 'Title').map(
                    o => normalizeProductOption(o)
                ) : []
            ,
            variants: variants ? 
                normalizeProductVariants(variants) : []
            , 
            ...rest
        };
    // Creating new product from [productNode] properties

    return product;

};