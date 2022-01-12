import { Stack } from '@chakra-ui/layout';

import ProductCard from '@/components/common/Cards/ProductCard';

const ProductsCaroussel = () => {
  return (
    <Stack direction={['row']} gap={8} overflow="auto" p={4}>
      <ProductCard minW="226px" h="300px" />
      <ProductCard minW="226px" h="300px" />
      <ProductCard minW="226px" h="300px" />
    </Stack>
  );
};

export default ProductsCaroussel;
