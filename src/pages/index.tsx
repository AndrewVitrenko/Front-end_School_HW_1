import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Store } from 'shared/interfaces';
import { Feed } from 'pages/Feed';
import { Profile } from 'pages/Profile';
import { Error } from 'entities/Error';
import { Container } from './Pages.styled';

export const Routing: React.FC = () => {
  const { error } = useSelector((store: Store) => store);

  return (
    <Container>
      {error && <Error />}
      {!error && <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>}
    </Container>
  )
}
