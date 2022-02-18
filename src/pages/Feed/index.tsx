import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { PostItem } from 'entities/PostItem';
import { PaginationBar } from 'features/PaginationBar'; 
// import { getFeed } from 'shared/api/feed';
// import { Store } from 'shared/interfaces';
import { PageTitle } from './Feed.styled';
import {Post} from '../../shared/interfaces';

const example: Post = {
  commentCount: 999,
  id: '1',
  diggCount: 111,
  text: 'test text',
  hashtags: [{
    id: '3',
    name: 'test hashtag'
  }],
  videoUrl: 'test url',
  authorMeta: {
    id: '4',
    avatar: 'avatar url',
    name: 'john',
    nickName: 'Johnny'
  }
};

const feed = new Array(30);
for (let i = 0; i < feed.length; i++) {
  feed[i] = {
    ...example,
    id: Math.random().toString()
  };
}

export const Feed: React.FC = () => {
  const dispatch = useDispatch();
  // const { feed } = useSelector((store: Store) => store);
  console.log(feed);
  const [ page, setPage ] = useState<number>(0);
  const PER_PAGE = 10;

  useEffect(() => {
    // dispatch(getFeed());
  }, [dispatch]);

  const handlePagination = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p - 1);
  };

  return (
    <>
      <PageTitle
        variant="h6">Trending Feed</PageTitle>
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
      <PaginationBar handleChange={handlePagination} current={page + 1} length={feed.length} perPage={PER_PAGE} />
    </>
  );
};
