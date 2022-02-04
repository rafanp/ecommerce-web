// import IconButton from '@/components/ui/Buttons';
import MaskedText from '@/components/ui/Text/MaskedText';
import { Flex } from '@chakra-ui/layout';
import { Image, Text, Box, Spacer, IconButton, Button } from '@chakra-ui/react';
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';
import { useCart } from 'app/contexts/cart/provider';

const CartProduct = ({ minW, h, product }) => {
  const { changeQuantity, removeItemFromCart } = useCart();
  if (!product) return null;
  const { id, name, price, picture, size, quantityInCart } = product;

  return (
    <Flex flexDirection={'row'} justifyContent="space-between">
      <Image
        borderRadius={24}
        objectFit="cover"
        alt="photo"
        minW={minW}
        w="20vh"
        h="25vh"
        src={picture}
        // mr="10%"
      />
      {/* <Spacer /> */}
      <Flex
        flexDirection={'column'}
        h="100%"
        minW="30%"
        justifyContent={'space-between'}
      >
        <Text fontWeight={'medium'} fontSize={'16px'}>
          {name}
        </Text>
        <Text fontSize={'14px'}>Size: {size || 'M'}</Text>
        <MaskedText fontWeight={'bold'} fontSize={'18px'}>
          {price}
        </MaskedText>
        <Flex gap={4} align={'center'}>
          <IconButton
            variant="outline"
            size="sm"
            icon={<FiMinus />}
            onClick={() => changeQuantity(product, 'decrease')}
          />
          {quantityInCart}
          <IconButton
            variant="outline"
            size="sm"
            icon={<FiPlus />}
            onClick={() => changeQuantity(product, 'increase')}
          />
        </Flex>
      </Flex>
      <IconButton
        variant="ghost"
        w={4}
        icon={<FiX />}
        onClick={() => removeItemFromCart(product)}
      />
    </Flex>
  );
};

export default CartProduct;
