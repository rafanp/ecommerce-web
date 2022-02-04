import { Flex } from '@chakra-ui/layout';
import { Button, Text, Heading } from '@chakra-ui/react';

import AnotherLayout from '@/components/layouts/AnotherLayout';
import MaskedText from '@/components/ui/Text/MaskedText';
import CartProduct from '@/components/common/Cards/CartProduct';
import { useCart } from 'app/contexts/cart/provider';

const Cart = () => {
  const { cartList } = useCart();

  const totalValue = cartList.reduce((acc, el) => {
    return acc + parseInt(el.price.replace(',', '')) * el.quantityInCart;
  }, 0);
  console.log('totalValue :', totalValue);

  return (
    <Flex flexDir="column" h={'100%'} p={4} alignContent="center" gap={4}>
      {cartList.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}

      <Heading
        as="h4"
        size="md"
        textAlign="center"
        fontWeight={'semibold'}
      ></Heading>
      <Flex gap={2} justify="end">
        <Text>Total</Text>
        <MaskedText justifyContent="center" mask="currency">
          {totalValue}
        </MaskedText>
      </Flex>

      <Flex mt={12}>
        <Button fontSize="14px" width="100%" h="54px">
          Checkout
        </Button>
      </Flex>
    </Flex>
  );
};

export default Cart;

Cart.getLayout = function getLayout(page) {
  return <AnotherLayout>{page}</AnotherLayout>;
};
