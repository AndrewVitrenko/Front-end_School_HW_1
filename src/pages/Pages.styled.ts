import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  flex-grow: 1;
  transition: all 0.3s ease-in-out;
`;
