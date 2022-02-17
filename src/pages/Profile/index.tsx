import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, CardContent, Box } from '@mui/material';
import { Store } from 'shared/interfaces';
import { getUserInfo, getUserFeed } from 'shared/api/user';
import userFeedBase from 'user-feed.json';
import { storeUserFeed } from 'store/reducer';
import { VideoItem } from '@AndrewVitrenko/post-video-library';
import { PaginationBar } from 'features/PaginationBar';
import { UserCard, PageTitle, UserText, Container } from './Profile.styled';

export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const { user, userFeed } = useSelector((store: Store) => store);
  const [ page, setPage ] = useState<number>(0);
  const PER_PAGE = 10;

  const handlePagination = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p - 1);
  };

  useEffect(() => {
    dispatch(getUserInfo());
    // if API works we can use dispatch(getUserFeed());
    dispatch(storeUserFeed(userFeedBase.itemList));
  }, [dispatch]);

  return (
    <Container>
      <UserCard>
        <PageTitle variant="h6">User Info</PageTitle>
        <CardContent>
          <Avatar alt="user avatar" src={user.avatarLarger} />
          <UserText variant="subtitle1">Name: {user.nickname}</UserText>
          <UserText variant="subtitle1">Is account private: {user.privateAccount ? 'yes' : 'no'}</UserText>
          <UserText variant="subtitle1">Signature: {user.signature}</UserText>
          {/* this code is commented due to changes in api
          <UserText variant="subtitle1">Followers: {user.stats.followerCount}</UserText>
          <UserText variant="subtitle1">Following: {user.stats.followingCount}</UserText> */}
        </CardContent>
      </UserCard>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& .MuiCard-root': {
            flexBasis: '20%',
            minWidth: '250px',
            margin: '10px 15px',
            textAlign: 'center'
          }
        }}
      >
        {userFeed
          .slice(page * PER_PAGE, (page + 1) * PER_PAGE)
          .map(video => <VideoItem key={video.id} video={video} />)}
      </Box>
      <PaginationBar current={page + 1} length={userFeed.length} perPage={PER_PAGE} handleChange={handlePagination} />
    </Container>
  );
};
