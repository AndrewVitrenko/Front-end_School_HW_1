import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Store } from 'interfaces';
import { Feed } from 'components/Feed';
import { Profile } from 'components/Profile';
import { Error } from 'components/Error';

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
  );
};
