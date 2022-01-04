import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Feed } from '../Feed';
import { Profile } from '../Profile';
import { Error } from '../Error';
import { Store } from '../../interfaces';

export const Main: React.FC = () => {
  const { error } = useSelector((store: Store) => store);

  return (
    <>
      {error && <Error />}
      {!error && <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>}
    </>
  )
}
