import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/header';
import Routers from './routers/routers';

const App: React.FC = () => {
  return (
    <Router>
      <div
        className="w-full h-screen bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: 'url(/images/background.jpg)' }}
      >
        <div className="w-full h-full bg-[#00000080]">
          <Header />

          <div className="w-full h-[calc(100vh - 120px)]">
            <Routers />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
