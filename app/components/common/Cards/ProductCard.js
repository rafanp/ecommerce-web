import MaskedText from '@/components/ui/Text/MaskedText';
import { Flex } from '@chakra-ui/layout';
import { Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const ProductCard = ({ minW, h }) => {
  return (
    <Link href={'/product/123'} passHref>
      <Flex
        _active={{
          // transitionDuration: 0.8,
          opacity: 0.8,
        }}
        flexDirection={'column'}
        alignItems="center"
        justifyContent="center"
        // onClick={() => console.log('Go to product')}
      >
        <Image
          // h="100%"
          // h=""
          // h="300px"
          // h="100%"
          h={h}
          borderRadius={12}
          // w="80%"
          // minW="226px"
          w="226px"
          objectFit="cover"
          alt="photo"
          minW={minW}
          src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />

        <Text fontWeight={'medium'} fontSize={'16px'}>
          Casual Jeans Shoes
        </Text>

        <MaskedText fontWeight={'bold'} fontSize={'18px'}>
          178.99
        </MaskedText>
      </Flex>
    </Link>
  );
};

export default ProductCard;
