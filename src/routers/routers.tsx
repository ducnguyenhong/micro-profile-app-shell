import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AngularWrapper from '../components/AngularWrapper';
import VueWrapper from '../components/VueWrapper';

const ReactApp = lazy(() => import('reactApp/App'));

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div></div>}>
            <ReactApp />
          </Suspense>
        }
      />
      <Route
        path="/project/*"
        element={
          <Suspense fallback={<div></div>}>
            <VueWrapper />
          </Suspense>
        }
      />
      <Route
        path="/blog"
        element={
          <Suspense fallback={<div></div>}>
            <AngularWrapper />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routers;
