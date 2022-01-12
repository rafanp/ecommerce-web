import { Flex, Box, Grid, GridItem, Spacer, Stack } from '@chakra-ui/layout';
import { Button, Image, Text, Heading } from '@chakra-ui/react';

import GroupButtons from '@/components/common/GroupButtons/GroupButton';
import ProductsList from '@/components/common/Lists/ProductsLists';
import ProductsCaroussel from '@/components/common/Carousel/ProductsCarousel';

const Home = () => {
  return (
    <Box h={'100%'} p={4}>
      <Heading>Find your style</Heading>
      <GroupButtons mt={4} mb={4} />
      <ProductsCaroussel />
    </Box>
  );
};

export default Home;
