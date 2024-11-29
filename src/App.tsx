import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/header';
import Routers from './routers/routers';

const App: React.FC = () => {
  return (
    <Router>
      <Box w="full" h="100vh" bgImage="url(/images/background.jpg)" bgSize="cover" bgRepeat="no-repeat" bgPos="center">
        <Box w="full" h="full" bgColor="#00000080">
          <Header />

          <Flex w="full" h="calc(100vh - 120px)">
            <Routers />
          </Flex>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
