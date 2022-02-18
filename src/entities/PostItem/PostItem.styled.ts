import styled from 'styled-components';
import {Card, Typography} from '@mui/material';

export const PostCard = styled(Card)`
  background-color: ${props => props.theme.cardBackground} !important;
  transition: all 0.3s ease-in-out !important;
`;

export const PostText = styled(Typography)`
  color: ${props => props.theme.cardText};
  transition: all 0.3s ease-in-out;
`;
