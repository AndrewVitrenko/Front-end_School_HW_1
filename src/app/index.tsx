import React from 'react';
import Providers from './providers';
import './index.css';

const App: React.FC = () => {
  return (
    <Providers.ThemeWrapper>
      <Providers.Router />
    </Providers.ThemeWrapper>
  );
}

export default App;
