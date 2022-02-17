import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

export const NavLink = styled(Link)`
  line-height: 1.75;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: inherit;
  padding: 6px 8px;
  font-weight: 500;
`;

export const ThemeToggle = styled(IconButton)`
  color: ${(props) => props.theme.white} !important;
`;
