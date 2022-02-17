import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from 'pages';
import { Header } from 'entities/Header';
import { ContentWrapper } from './Router.styled';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ContentWrapper>
        <Header />
        <Routing />
      </ContentWrapper>
    </BrowserRouter>
  );
};
