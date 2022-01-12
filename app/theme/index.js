import { extendTheme } from '@chakra-ui/react';

import { Button } from './components/button';
import { styles } from './styles';
import { colors } from './colors';

const overrides = {
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  colors,
  styles,
  components: {
    Button,
  },
};

export const theme = extendTheme(overrides);
