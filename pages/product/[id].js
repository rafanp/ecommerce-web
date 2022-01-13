import { Flex, Box, Grid, GridItem, Spacer, Stack } from '@chakra-ui/layout';
import { Button, Image, Text, Heading } from '@chakra-ui/react';

import GroupButtons from '@/components/common/GroupButtons/GroupButton';
import ProductsList from '@/components/common/Lists/ProductsLists';
import ProductsCaroussel from '@/components/common/Carousel/ProductsCarousel';
import AnotherLayout from '@/components/layouts/AnotherLayout';
import MaskedText from '@/components/ui/Text/MaskedText';
import { useState } from 'react';
import { getDataById, selectIndexById } from 'app/services/fauna';

const Product = ({ productItem }) => {
  const [selected, setSelected] = useState(['1']);

  return (
    <Flex flexDir="column" h={'100%'} p={4} alignContent="center" gap={4}>
      <Heading
        as="h4"
        size="md"
        textAlign="center"
        fontWeight={'semibold'}
        // mb={2}
      >
        {productItem.name}
      </Heading>
      <MaskedText
        fontWeight={'bold'}
        fontSize={'18px'}
        justifyContent="center"
        // mb={4}
      >
        {productItem.price}
      </MaskedText>
      <Image
        borderRadius={12}
        boxSize="100vw"
        // w="100%"
        // h="100vw"
        objectFit="cover"
        alt="photo"
        src={productItem.picture}
      />
      <Heading as="h5" size="sm" fontWeight={'semibold'} mt={4}>
        Select Size
      </Heading>
      <GroupButtons
        onClick={(category) => setSelected([category.id])}
        selected={selected}
        data={[
          {
            id: '1',
            name: 'S',
          },
          {
            id: '2',
            name: 'M',
          },
          {
            id: '3',
            name: 'L',
          },
          {
            id: '4',
            name: 'XL',
          },
        ]}
      />

      <Flex mt={12}>
        <MaskedText
          fontWeight={'bold'}
          fontSize={'18px'}
          justifyContent="center"
          // mb={4}
        >
          {productItem.price}
        </MaskedText>
        <Spacer />
        <Button fontSize="14px" width="50%" h="54px">
          Add to Cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default Product;

Product.getLayout = function getLayout(page) {
  return <AnotherLayout>{page}</AnotherLayout>;
};

export async function getServerSideProps({ params }) {
  console.log('>>>> params :', params);
  const productItem = await getDataById('get_product_by_id', params.id);

  return {
    props: {
      productItem: productItem || null,
    },
  };
}
