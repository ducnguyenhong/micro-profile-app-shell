import React, { useEffect } from 'react';

const VueWrapper: React.FC = () => {
  // const location = useLocation();

  useEffect(() => {
    const loadVueApp = async () => {
      const mountApp = (await import('vueApp/App'))?.mountApp;
      if (mountApp) {
        mountApp('#vue-child-root', '/project');
      }
    };

    loadVueApp();
  }, []);

  return <div id="vue-child-root" />;
};

export default VueWrapper;
