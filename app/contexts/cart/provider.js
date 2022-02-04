import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import nookies, { parseCookies, setCookie } from 'nookies';
import { getData } from 'app/services/defaultService';
import { useToast } from '@chakra-ui/react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const toast = useToast();

  const [cartList, setCartList] = useState(() => {
    // const storagedCart = localStorage.getItem('@ecommerce:cart');
    const storagedCart = parseCookies();
    console.log('storagedCart :', storagedCart);
    if (storagedCart.USER_CART) {
      return JSON.parse(storagedCart.USER_CART);
    }
    return [];
  });

  const [loading, setLoading] = useState(false);

  const refreshData = useCallback(async (domain) => {
    setLoading(true);
    const response = await getData(domain);
    setData(response.data);
    setLoading(false);
  }, []);

  const addProductToCart = (product) => {
    const updatedCart = [...cartList];
    updatedCart.push({ ...product, quantityInCart: 1 });

    updateCartList(updatedCart);
  };

  const changeQuantity = (product, type) => {
    const updatedCart = [...cartList];
    const index = updatedCart.findIndex((item) => item.id === product.id);
    const selected = updatedCart[index];

    if (type === 'increase') {
      selected = {
        ...selected,
        quantityInCart: selected.quantityInCart + 1,
      };
    } else {
      if (selected.quantityInCart <= 1) return;

      selected = {
        ...selected,
        quantityInCart: selected.quantityInCart - 1,
      };
    }

    updatedCart[index] = selected;
    updateCartList(updatedCart);
  };

  const removeItemFromCart = (product) => {
    const updatedCart = [...cartList];
    const index = updatedCart.findIndex((item) => item.id === product.id);
    updatedCart.splice(index, 1);
    updateCartList(updatedCart);
  };

  const updateCartList = (cart) => {
    setCookie(null, 'USER_CART', JSON.stringify(cart), {
      maxAge: 86400,
      path: '/',
    });

    setCartList(cart);
  };

  useEffect(() => {
    // setCookie(null, 'USER_CART', JSON.stringify(cartList), {
    //   maxAge: 86400,
    //   path: '/',
    // });
    // localStorage.setItem('@ecommerce:cart', JSON.stringify(cartList));
    // toast({
    //   description: 'Produto adicionado ao carrinho.',
    //   status: 'success',
    //   duration: 2000,
    //   isClosable: true,
    // });
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        refreshData,
        loading,
        addProductToCart,
        changeQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
