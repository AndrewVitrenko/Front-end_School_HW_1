import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from 'test-utils';
import { Feed } from 'pages/Feed';
import { Post } from 'shared/interfaces';

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

  const handlers = [
    rest.get('https://tiktok33.p.rapidapi.com/trending/feed', (req, res, ctx) => {
      const response = new Array(30);
      for (let i = 0; i < response.length; i++) {
        response[i] = {
          ...post,
          id: `${i + 1}`
        };
      }
      return res(ctx.json(response), ctx.delay(150))
    })
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen({
    onUnhandledRequest: ({method, url}) => {
      if (!url.pathname.endsWith('/feed')) {
        throw new Error('Forbidden request');
      }
    }
  }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render component', async () => {
    render(<Feed />);
    expect(screen.getByText('Trending Feed')).toBeInTheDocument();
    expect(await screen.findByText('3')).toBeInTheDocument();
  });

  it('should switch pages', async () => {
    render(<Feed />);
    fireEvent.click(await screen.findByText('3'));
    expect(screen.getByText('3')).toHaveClass('Mui-selected');
  });
})