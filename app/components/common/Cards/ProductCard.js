import MaskedText from '@/components/ui/Text/MaskedText';
import { Flex } from '@chakra-ui/layout';
import { Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const ProductCard = ({ minW, h, product }) => {
  if (!product) return null;
  const { id, name, price, picture } = product;

  return (
    <Link href={`/product/${id}`} passHref>
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
          h={h || '100%'}
          borderRadius={12}
          // w="80%"
          // minW="226px"
          w="226px"
          objectFit="cover"
          alt="photo"
          minW={minW}
          src={picture}
        />

        <Text fontWeight={'medium'} fontSize={'16px'}>
          {name}
        </Text>

        <MaskedText fontWeight={'bold'} fontSize={'18px'}>
          {price}
        </MaskedText>
      </Flex>
    </Link>
  );
};

export default ProductCard;
