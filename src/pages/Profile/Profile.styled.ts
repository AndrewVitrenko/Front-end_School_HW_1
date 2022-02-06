import styled from 'styled-components';
import { Card, Typography } from '@mui/material';

export const UserCard = styled(Card)`
  background-color: ${props => props.theme.cardBackground} !important;
  transition: all 0.3s ease-in-out !important;
`;

export const PageTitle = styled(Typography)`
  color: ${props => props.theme.text};
  transition: all 0.3s ease-in-out;
`;

export const UserText = styled(Typography)`
  color: ${props => props.theme.cardText};
  transition: all 0.3s ease-in-out;
`;
