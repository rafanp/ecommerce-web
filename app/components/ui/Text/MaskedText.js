import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

const MaskedText = ({ children, fontWeight, fontSize, ...props }) => {
  return (
    <>
      <Flex alignItems="center" {...props}>
        <Text
          fontWeight={'bold'}
          fontSize={'18px'}
          color={'primary.900'}
          mr={1}
        >
          $
        </Text>
        <Text fontWeight={fontWeight} fontSize={fontSize}>
          {children}
        </Text>
      </Flex>
    </>
  );
};

export default MaskedText;
