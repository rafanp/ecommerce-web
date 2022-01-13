import { Stack } from '@chakra-ui/layout';

import ProductCard from '@/components/common/Cards/ProductCard';

const ProductsCaroussel = ({ products }) => {
  return (
    <Stack direction={['row']} gap={8} overflow="auto" p={4}>
      {renderProductCards(products)}
    </Stack>
  );
};

const renderProductCards = (products) => {
  if (!products) {
    return <h3>There is no products to show</h3>;
  }

  return products.map((product) => {
    return (
      <ProductCard key={product.id} product={product} minW="226px" h="300px" />
    );
  });
};

export default ProductsCaroussel;
