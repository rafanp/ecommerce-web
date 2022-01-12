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

const Home = () => {
  return (
    <Box h={'100%'} p={4}>
      <Heading>Find your style</Heading>
      <GroupButtons mt={4} mb={4} />
      <ProductsCaroussel />
      <ProductsList mt={8} />
    </Box>
  );
};

export default Home;
