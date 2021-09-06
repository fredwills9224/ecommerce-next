import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '../framework/shopify/product/get-all-products';

export async function getStaticProps(){

  const products = await getAllProducts();
  return{
    props:{
      products
    },
    // Check database every 4 hours for new products
      revalidate: 4 * 60 * 60
    // Check database every 4 hours for new products
  };

};

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div>
      { products }
    </div>
  );

};
