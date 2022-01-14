import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';

const ReduxProvider: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        {children}
      </Router>
    </Provider>
  );
};

const reduxRender = (children: React.ReactNode) => {
  return render(<ReduxProvider>{children}</ReduxProvider>);
};

export * from '@testing-library/react';

export { reduxRender as render };
