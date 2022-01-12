import { Flex, Box, Grid, GridItem, Spacer, Stack } from '@chakra-ui/layout';
import {
  Button,
  Image,
  Text,
  Heading,
  ButtonGroup,
  Link,
} from '@chakra-ui/react';

import { useProducts } from 'app/contexts/products/provider';

import ConfigTables from '@/components/templates/ConfigTables';
import { ProductsProvider } from 'app/contexts/products/provider';
import Input from '@/components/ui/Input/Input';

const Home = () => {
  return (
    <Box h={'100%'} p={4}>
      <Heading>Find your style</Heading>
      <FilterButtons />
      <ProductsCaroussel />
      <ProductsList mt={8} />
    </Box>
  );
};

export default Home;

const FilterButtons = () => {
  const filters = [
    {
      id: '1',
      title: 'All',
    },
    {
      id: '2',
      title: 'Winter',
      checked: true,
    },
  ];
  return (
    <ButtonGroup>
      {filters.map((item) => {
        return (
          <Button
            key={item.id}
            // borderRadius={8}
            // color="gray.700"
            // backgroundColor="gray.800"
            variant={item.checked ? 'outline' : 'solid'}
          >
            {item.title}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

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

const ProductsCaroussel = () => {
  return (
    <Stack direction={['row']} gap={8} overflow="auto" p={4}>
      <ProductCard minW="226px" h="300px" />
      <ProductCard minW="226px" h="300px" />
      <ProductCard minW="226px" h="300px" />
    </Stack>
  );
};

const MaskedText = ({ children, ...props }) => {
  return (
    <>
      <Flex alignItems="center">
        <Text
          fontWeight={'bold'}
          fontSize={'18px'}
          color={'primary.900'}
          mr={1}
        >
          $
        </Text>
        <Text {...props}>{children}</Text>
      </Flex>
    </>
  );
};

const ProductsList = ({ ...rest }) => {
  return (
    <Box {...rest}>
      <Flex alignItems="center">
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
