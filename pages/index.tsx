import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '@framework/product/get-all-products';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero } from '@components/ui';

export async function getStaticProps(){

  const config = getConfig();
  const products = await getAllProducts(config);
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
    <>
      
      <Grid>
        {products.slice(0,3).map(product => 

          <ProductCard 
            key={product.id}
            product={product}
          />

        )}
      </Grid>
      <Hero
        headline='Cookies, ice cream and muffin'
        description='Bear claw candy macaroon cotton candy bear claw pudding brownie marshmallow marzipan. Cheesecake lemon drops muffin gingerbread candy canes cake tart. Cotton candy gingerbread carrot cake gummies sweet roll chocolate bar. Caramels croissant shortbread cotton candy toffee halvah soufflé apple pie sweet roll. Candy gummi bears caramels topping oat cake. Cotton candy fruitcake halvah marshmallow sesame snaps.'
      />

    </>
  );

};

// Initializing [Layout] as [Home] prop
  Home.Layout = Layout;
// Initializing [Layout] as [Home] prop