import styled from 'styled-components';
import {Typography} from '@mui/material';

export const PageTitle = styled(Typography)`
  color: ${props => props.theme.text};
  transition: all 0.3s ease-in-out;
`;

export const Container = styled.div`
  .MuiCard-root {
    background-color: ${props => props.theme.cardBackground} !important;
    transition: all 0.3s ease-in-out !important;
  }

  .MuiTypography-root {
    color: ${props => props.theme.cardText};
    transition: all 0.3s ease-in-out;
  }
`;
