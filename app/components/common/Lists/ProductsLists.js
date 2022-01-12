import { Flex, Box, Grid, GridItem, Spacer, Stack } from '@chakra-ui/layout';
import {
  Button,
  Image,
  Text,
  Heading,
  ButtonGroup,
  Link,
} from '@chakra-ui/react';
import ProductCard from '@/components/common/Cards/ProductCard';

const ProductsList = ({ ...rest }) => {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Box>
  );
};

export default ProductsList;
