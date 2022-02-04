import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { FiSearch, FiShoppingBag, FiMenu } from 'react-icons/fi';
import { Icon } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import Input from '@/components/ui/Input/Input';
import Link from 'next/link';

const Header = () => {
  return (
    <Flex
      as="header"
      // bg="/vercel.svg"
      h={'100%'}
      align="center"
      justifyContent={'space-between'}
      // borderRadius={12}
      p={4}
      // pl={4}
      // pr={4}
    >
      <Icon as={FiMenu} color="gray.600" w={6} h={6} />

      <Flex align="center">
        <Icon as={FiSearch} color="gray.600" w={6} h={6} mr={8} />
        <Link href="/cart" passHref>
          <Icon as={FiShoppingBag} color="gray.600" w={6} h={6} />
        </Link>
      </Flex>
    </Flex>
  );
};
export default Header;
