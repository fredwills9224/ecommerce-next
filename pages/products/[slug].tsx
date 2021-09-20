import { Layout } from "@components/common";
import { getConfig } from "@framework/api/config";
import { getAllProductsPaths, getProduct } from "@framework/product";
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";

// fetch all of the products' slugs -> endpoints 
    export const getStaticPaths: GetStaticPaths = async ()=>{
        
        const config = getConfig();
        const { products } = await getAllProductsPaths(config);
        return{
            paths: products.map(p => ({ params: { slug: p.slug } }) ),
            fallback: false
        };
        
    };
// fetch all of the products' slugs -> endpoints 
// fetch products' properties
    export const getStaticProps = async ({params}: GetStaticPropsContext<{slug: string}>)=>{
        
        const config = getConfig();
        const { product } = await getProduct(config);
        return{

            props: {
                product
            }

        };
    };
// fetch products' properties

export default function ProductSlug({product}: InferGetStaticPropsType<typeof getStaticProps>){

    return(
        <div>
            {product.name}
            {product.slug}
        </div>
    );

};

ProductSlug.Layout = Layout;