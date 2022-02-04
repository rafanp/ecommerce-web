import { extendTheme } from '@chakra-ui/react';

import Button from './components/button';

import { styles } from './styles';
import { colors } from './colors';
import { shadows } from './shadows';

const overrides = {
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors,
  styles,
  components: {
    Button,
  },
  shadows,
};

export const theme = extendTheme(overrides);
