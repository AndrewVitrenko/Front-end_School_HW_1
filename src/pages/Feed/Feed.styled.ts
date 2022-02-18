import styled from 'styled-components';
import {Typography} from '@mui/material';

export const PageTitle = styled(Typography)`
  color: ${props => props.theme.text};
  transition: all 0.3s ease-in-out;
`;
