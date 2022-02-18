import styled from 'styled-components';
import {Card, Typography} from '@mui/material';

export const Container = styled(Card)`
  background-color: ${props => props.theme.cardBackground} !important;
  transition: all 0.3s ease-in-out !important;
`;

export const Text = styled(Typography)`
  color: ${props => props.theme.cardText};
  transition: all 0.3s ease-in-out;
`;
