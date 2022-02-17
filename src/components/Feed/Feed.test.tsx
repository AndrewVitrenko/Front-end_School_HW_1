import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import { Feed } from '.';
import { Post } from 'interfaces';

describe('testing Feed component', () => {
  const post: Post = {
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

  beforeEach(() => {
    const response = new Array(30);
    for (let i = 0; i < response.length; i++) {
      response[i] = {
        ...post,
        id: `${i + 1}`
      };
    }

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(response),
        ok: true,
      })
    ) as jest.Mock;
  });

  it('should render component', async () => {
    const { container } = render(<Feed />);
    expect(container.firstChild).toHaveClass('feed-page');
    expect(await screen.findByText('3')).toBeInTheDocument();
  });

  it('should switch pages', async () => {
    render(<Feed />);
    fireEvent.click(await screen.findByText('3'));
    expect(screen.getByText('3')).toHaveClass('Mui-selected');
  });
});