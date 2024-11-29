import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/header';
import Routers from './routers/routers';

const App: React.FC = () => {
  return (
    <Router>
      <Box
        w="full"
        h="100vh"
        bgImage="url(https://img.freepik.com/free-photo/panoramic-view-sunset-night_23-2148933764.jpg?t=st=1732775386~exp=1732778986~hmac=e2b4fe24d11dcbf50aa2c95da103946bb6ad62da7d68b4527cfb1d6e59b49bb8&w=1060)"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
      >
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
