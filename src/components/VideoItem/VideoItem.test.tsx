import React from 'react';
import { render, screen } from 'test-utils';
import { VideoItem } from '.';
import { Video } from 'interfaces';

describe('VideoItem', () => {
  let video: Video;

  beforeEach(() => video = {
    id: '1',
    stats: {
      playCount: 555
    },
    video: {
      playAddr: 'test url'
    }
  });

  it('should render properly', () => {
    render(<VideoItem video={video} />);
    expect(screen.getByText(`Played: ${video.stats.playCount} times!`)).toBeInTheDocument();
  });
});
