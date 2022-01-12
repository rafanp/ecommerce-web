import { Flex, Box, Grid, GridItem, Spacer, Stack } from '@chakra-ui/layout';
import {
  Button,
  Image,
  Text,
  Heading,
  ButtonGroup,
  Link,
} from '@chakra-ui/react';

const GroupButtons = ({ data, ...props }) => {
  const filters = data || [
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
    <ButtonGroup {...props}>
      {filters.map((item) => {
        return (
          <Button key={item.id} variant={item.checked ? 'solid' : 'outline'}>
            {item.title}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default GroupButtons;
