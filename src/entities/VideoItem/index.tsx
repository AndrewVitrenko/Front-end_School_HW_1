import React from 'react';
import { CardContent, CardMedia } from '@mui/material';
import { Video } from 'shared/interfaces';
import { Text, Container } from './VideoItem.styled';

export const VideoItem: React.FC<{ video: Video }> = ({ video }) => {
  return (
    <Container>
      <CardContent>
        <Text variant="h6">Played: {video.stats.playCount} times!</Text>
        <CardMedia
          component="video"
          controls
          height="250"
          src={video.video.playAddr}
        />
      </CardContent>
    </Container>
  );
};
