import React from 'react';
import {Box, Typography, AppBar, Toolbar} from '@mui/material';
import {ThemeContext} from 'app/providers/theme/theming';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NavLink, ThemeToggle } from './Header.styled';

export const Header: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggle }) => <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              TikTuk;)
            </Typography>
            <ThemeToggle onClick={toggle}>
              {theme === 'light' && <LightModeIcon />}
              {theme === 'dark' && <DarkModeIcon />}
            </ThemeToggle>
            <NavLink to="/feed">
              Feed
            </NavLink>
            <NavLink to="/profile">
              Profile
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>}
    </ThemeContext.Consumer>
  );
};
