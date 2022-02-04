import { Flex } from '@chakra-ui/layout';
import { Button, ButtonGroup } from '@chakra-ui/react';

const GroupButtons = ({ data, selected, onClick, ...props }) => {
  return (
    <Flex>
      <ButtonGroup overflow="auto" width={'100%'} {...props}>
        {data.map((item) => {
          return (
            <Button
              minWidth={'auto'}
              key={item.id}
              variant={
                selected.some((k) => k === item.id) ? 'solid' : 'outline'
              }
              onClick={() => onClick(item)}
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
