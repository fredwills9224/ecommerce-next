import { Product } from '@common/types/product';

type AvailableChoices = 'color' | 'size' | string;

export type Choices = {
    [P in AvailableChoices]: string
}

export function getVariant(product: Product, choices: Choices){
    
    // returns true when variant is found while iterating through [variants]
        const variant = product.variants.find((variant)=>{
            console.log(variant);
            return true;
        });
    // returns true when variant is found while iterating through [variants]

    return variant;

};