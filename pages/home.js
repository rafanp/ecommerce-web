import { Flex, Box, Grid, GridItem, Spacer, Stack } from '@chakra-ui/layout';
import {
  Button,
  Image,
  Text,
  Heading,
  ButtonGroup,
  Link,
} from '@chakra-ui/react';

import { useProducts } from 'app/contexts/products/provider';

import ConfigTables from '@/components/templates/ConfigTables';
import { ProductsProvider } from 'app/contexts/products/provider';

import GroupButtons from '@/components/common/GroupButtons/GroupButton';
import ProductsList from '@/components/common/Lists/ProductsLists';
import ProductsCaroussel from '@/components/common/Carousel/ProductsCarousel';
import { getData } from 'app/services/defaultService';
import { api } from 'app/services/api';
import { useEffect, useState } from 'react';
import { getAllData } from 'app/services/fauna';

const Home = ({ products, categories }) => {
  console.log('categories :', categories);
  console.log('products :', products);
  const productsCategories = [
    {
      id: '1',
      name: 'All',
    },
  ];

  const [selected, setSelected] = useState(['1']);

  return (
    <Box h={'100%'} p={4}>
      <Heading>Find your style</Heading>
      <GroupButtons
        mt={4}
        mb={4}
        data={productsCategories.concat(categories)}
        onClick={(category) => setSelected([category.id])}
        selected={selected}
      />
      <ProductsCaroussel products={products} />
      <ProductsList mt={8} products={products} />
    </Box>
  );
};

export async function getStaticProps() {
  // const res = await api.get(`/products`);
  // console.log('res :', res);
  // const posts2 = await api.get('/tests');
  // console.log('posts2 :', posts2);
  const products = await getAllData('all_products');
  const categories = await getAllData('all_categories');

  return {
    props: {
      products,
      categories,
    },
  };
}

export default Home;
