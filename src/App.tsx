import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/header';
import Routers from './routers/routers';
import { useMediaQuery } from './utils/hook';

const App: React.FC = () => {
  const { isMatch: isTouch } = useMediaQuery('(max-width: 991px)');

  return (
    <Router>
      <div
        className="w-full h-screen bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: 'url(/images/background.jpg)' }}
      >
        <div className="w-full h-full bg-[#000000b3]">
          <Header />

          <div className="w-full overflow-y-auto" style={{ height: isTouch ? '100vh' : 'calc(100vh - 120px)' }}>
            <Routers />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
