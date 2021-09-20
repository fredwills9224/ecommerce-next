import { Layout } from "@components/common";
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";

// fetch all of the products' slugs -> endpoints 
    export const getStaticPaths: GetStaticPaths = async ()=>{
        return{

            paths: [
                { params: { slug: 'cool-hat' } },
                { params: { slug: 'lightweight-jacket' } },
                { params: { slug: 't-shirt' } }
            ],
            fallback: false

        };
    };
// fetch all of the products' slugs -> endpoints 
// fetch products' properties
    export const getStaticProps = async ({params}: GetStaticPropsContext<{slug: string}>)=>{
        return{

            props: {
                product:{
                    slug: params?.slug
                }
            }

        };
    };
// fetch products' properties

export default function ProductSlug({product}: InferGetStaticPropsType<typeof getStaticProps>){

    return(
        <div>
            {product.slug}
        </div>
    );

};

ProductSlug.Layout = Layout;