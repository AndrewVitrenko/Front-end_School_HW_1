import { render, screen } from 'test-utils';
import { VideoItem } from 'entities/VideoItem';
import { Video } from 'shared/interfaces';

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
})
