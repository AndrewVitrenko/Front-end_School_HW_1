import styled from 'styled-components';
import { Stack } from '@mui/material';

export const PagBar = styled(Stack)`
  & button {
    color: ${props => props.theme.pagination};
    transition: all 0.3s ease-in-out;
  }
  
  & .Mui-selected {
    background-color: ${props => props.theme.paginationBackground} !important;
    transition: all 0.3s ease-in-out !important;
  }
`;
