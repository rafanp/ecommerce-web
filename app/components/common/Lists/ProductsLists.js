import { Flex, Box, Grid, Spacer } from '@chakra-ui/layout';
import { Heading, Link } from '@chakra-ui/react';
import ProductCard from '@/components/common/Cards/ProductCard';

const ProductsList = ({ products, ...rest }) => {
  return (
    <Box {...rest}>
      <Flex alignItems="center" mb={4}>
        <Heading as="h3" size="lg">
          Products
        </Heading>
        <Spacer />
        <Link color="primary.900" variant="link">
          See all
        </Link>
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {renderProductCards(products)}
      </Grid>
    </Box>
  );
};

const renderProductCards = (products) => {
  if (!products) {
    return <h3>There is no products to show</h3>;
  }

  return products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
};

export default ProductsList;
