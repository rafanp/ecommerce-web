import { jsx, css } from '@emotion/react';
import Header from '@/components/common/Header';
import Navigation from '@/components/common/Navigation';

import { Flex } from '@chakra-ui/layout';
import { Grid, GridItem, Box } from '@chakra-ui/react';

const Page = (props) => {
  const { children } = props;
  return (
    <>
      <Grid
        h={'100vh'}
        templateRows="60px 1fr"
        templateColumns="repeat(5, 1fr)"
        mg={0}
        backgroundImage={'/background.svg'}
        backgroundRepeat="no-repeat"
        // gap={8}
        // p={4}
        // overflow={"hidden"}
      >
        {/* <GridItem rowSpan={2} colSpan={1}>
          <Navigation />
        </GridItem> */}

        <GridItem colSpan={5}>
          <Header />
        </GridItem>

        <GridItem colSpan={{ base: 5, md: 5 }} overflow="auto">
          {children}
        </GridItem>
      </Grid>
    </>
  );
};

export default Page;
