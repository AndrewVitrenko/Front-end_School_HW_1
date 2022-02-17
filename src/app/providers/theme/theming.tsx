import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from 'app/styles/theme.global';

export const ThemeContext = React.createContext<{
  theme: 'light' | 'dark',
  toggle: () => void
}>({
  theme: 'light',
  toggle: () => {}
});

export const ThemeWrapper: React.FC = ({children}) => {
  const [themeType, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(themeType === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{theme: themeType, toggle: toggleTheme}}>
      <ThemeContext.Consumer>
        {value => <ThemeProvider theme={theme[value.theme]}>
          {children}
        </ThemeProvider>
        }
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
};
