import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
