import React from 'react';
import {
  CardContent,
  CardMedia,
  Link,
  Avatar
} from '@mui/material';
import { Post } from 'shared/interfaces';
import { PostCard, PostText } from './PostItem.styled';

export const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <PostCard>
      <CardContent>
        <CardMedia
          component="video"
          src={post.videoUrl}
          height="300"
          controls
        />
        <PostText variant="subtitle1">{post.text}</PostText>
        <Link
          color="inherit"
          display="inline-flex"
          underline="none"
          href={'https://www.tiktok.com/@' + post.authorMeta.name}
          sx={{
            alignItems: 'center',
            marginTop: '15px'
          }}
        >
          <Avatar
            alt={post.authorMeta.nickName}
            src={post.authorMeta.avatar}
            sx={{
              marginRight: '12px'
            }}
          />
          <PostText variant="overline">{post.authorMeta.nickName}</PostText>
        </Link>
        <PostText variant="caption" display="block">
          {post.hashtags.map(hash => '#' + hash.name + ' ')}
        </PostText>
        <PostText variant="subtitle1">Comments count: {post.commentCount}</PostText>
        <PostText variant="subtitle1">Likes count: {post.diggCount}</PostText>
      </CardContent>
    </PostCard>
  );
};
