import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';

const ReduxProvider: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

const reduxRender = (children: React.ReactNode) => {
  return render(<ReduxProvider>{children}</ReduxProvider>);
};

export * from '@testing-library/react';

export { reduxRender as render };
