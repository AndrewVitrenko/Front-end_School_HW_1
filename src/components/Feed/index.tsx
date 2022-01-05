import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Pagination, Stack } from '@mui/material';
import { PostItem } from '../PostItem';
import { getFeed } from '../../api/feed';
import { Store } from '../../interfaces';

export const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const { feed } = useSelector((store: Store) => store);
  const [ page, setPage ] = useState<number>(0);
  const PER_PAGE = 10;

  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  const handlePagination = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p - 1);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& .MuiCard-root': {
            margin: '15px',
            flexBasis: '25%',
            minWidth: '250px',
          },
        }}
      >
        {feed
          .slice(page * PER_PAGE, (page + 1) * PER_PAGE)
          .map(post => <PostItem key={post.id} post={post} />)}
      </Box>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(feed.length / PER_PAGE)}
          onChange={handlePagination}
          page={page + 1}
          shape="rounded"
          sx={{
            '& .MuiPagination-ul': {
              justifyContent: 'center'
            }
          }}
        />
      </Stack>
    </>
  );
};
