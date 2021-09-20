import { ApiConfig } from "@common/types/api";
import { Product } from "@common/types/product";

// [Pick] is a global type that allows you to select an object with out providing every required field
    type ReturnType = {
        products: Pick<Product, 'slug'>[];
    };
// [Pick] is a global type that allows you to select an object with out providing every required field

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType>=>{

    return{
        products: [
            { slug: 'cool-hat'},
            { slug: 't-shirt' },
            { slug: 'lightweight-jacket' }
        ]
    }

};

export default getAllProductsPaths;