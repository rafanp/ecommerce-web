import { Flex, Box, Grid, GridItem, Spacer, Stack } from '@chakra-ui/layout';
import {
  Button,
  Image,
  Text,
  Heading,
  ButtonGroup,
  Link,
} from '@chakra-ui/react';

const GroupButtons = ({ data, selected, onClick, ...props }) => {
  return (
    <Flex>
      <ButtonGroup overflow="auto" width={'100%'} {...props}>
        {data.map((item) => {
          return (
            <Button
              // width="fit-content"
              minWidth={'auto'}
              key={item.id}
              variant={
                selected.some((k) => k === item.id) ? 'solid' : 'outline'
              }
              // variant={item.checked ? 'solid' : 'outline'}
              onClick={() => onClick(item)}
              // checked={}
            >
              {item.name}
            </Button>
          );
        })}
      </ButtonGroup>
    </Flex>
  );
};

export default GroupButtons;
