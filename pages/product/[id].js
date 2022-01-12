import { Flex, Box, Grid, GridItem, Spacer, Stack } from '@chakra-ui/layout';
import { Button, Image, Text, Heading } from '@chakra-ui/react';

import GroupButtons from '@/components/common/GroupButtons/GroupButton';
import ProductsList from '@/components/common/Lists/ProductsLists';
import ProductsCaroussel from '@/components/common/Carousel/ProductsCarousel';
import AnotherLayout from '@/components/layouts/AnotherLayout';
import MaskedText from '@/components/ui/Text/MaskedText';

const Product = () => {
  return (
    <Flex flexDir="column" h={'100%'} p={4} alignContent="center" gap={4}>
      <Heading
        as="h4"
        size="md"
        textAlign="center"
        fontWeight={'semibold'}
        // mb={2}
      >
        Beach Crochet Lace
      </Heading>
      <MaskedText
        fontWeight={'bold'}
        fontSize={'18px'}
        justifyContent="center"
        // mb={4}
      >
        39.99
      </MaskedText>
      <Image
        borderRadius={12}
        boxSize="100vw"
        // w="100%"
        // h="100vw"
        objectFit="cover"
        alt="photo"
        src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Heading as="h5" size="sm" fontWeight={'semibold'} mt={4}>
        Select Size
      </Heading>
      <GroupButtons
        data={[
          {
            id: '1',
            title: 'S',
          },
          {
            id: '2',
            title: 'M',
            checked: true,
          },
          {
            id: '3',
            title: 'L',
          },
          {
            id: '3',
            title: 'XL',
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
          39.99
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
