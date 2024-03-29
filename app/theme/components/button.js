const SolidButton = (props) => ({
  bg: 'gray.800',
  color: 'white',
  _active: {
    bg: 'gray.700',
    opacity: 0.4,
  },
  _focus: {
    bg: 'gray.800',
  },
  _hover: {
    bg: 'gray.800',
  },
});

const ConfigButton = () => ({});

const Button = {
  baseStyle: {
    fontWeight: 'semi-bold',
    borderRadius: '12px',
    transitionDuration: '0.4s',
    // minWidth: 'auto',
  },
  // 2. We can add a new button size or extend existing
  // sizes: {
  //   xl: {
  //     h: '56px',
  //     fontSize: 'lg',
  //     px: '32px',
  //   },
  // },
  variants: {
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde',
    },
    solid: SolidButton,
    outline: {
      _active: {
        bg: 'gray.100',
      },
    },
  },
};

export default Button;
