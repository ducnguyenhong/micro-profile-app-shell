import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'zone.js';
import App from './App';
import { Provider } from './components/ui/provider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
