import MaskedText from '@/components/ui/Text/MaskedText';
import { Flex, Box, Grid, GridItem, Spacer, Stack } from '@chakra-ui/layout';
import {
  Button,
  Image,
  Text,
  Heading,
  ButtonGroup,
  Link,
} from '@chakra-ui/react';

const ProductCard = ({ minW, h }) => {
  return (
    <Flex flexDirection={'column'} alignItems="center" justifyContent="center">
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
  );
};

export default ProductCard;
