import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

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

export default MaskedText;
