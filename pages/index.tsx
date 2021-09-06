import type { InferGetStaticPropsType } from 'next';

export async function getStaticProps(){

  const products = [1, 2, 3];
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
