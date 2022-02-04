import Page from '@/components/layouts/Page';
import { ChakraProvider } from '@chakra-ui/react';
import { CategoryProvider } from 'app/contexts/category/provider';
import { theme } from 'app/theme';
import { GlobalModalProvider } from 'app/contexts/globalModal/provider';
import { ProductsProvider } from 'app/contexts/products/provider';
import { CartProvider } from 'app/contexts/cart/provider';

const GetProviders = ({ children }) => {
  return (
    <GlobalModalProvider>
      <CartProvider>
        <CategoryProvider>
          <ProductsProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </ProductsProvider>
        </CategoryProvider>
      </CartProvider>
    </GlobalModalProvider>
  );
};

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    // <GetProviders>{Component.getLayout}</GetProviders> ||
    Component.getLayout ||
    ((page) => (
      // <GetProviders>
      <Page>{page}</Page>
      // </GetProviders>
    ));

  return <GetProviders>{getLayout(<Component {...pageProps} />)}</GetProviders>;
}
