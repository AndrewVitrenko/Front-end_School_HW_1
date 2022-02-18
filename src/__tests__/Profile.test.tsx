import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from 'test-utils';
import { Profile } from 'pages/Profile';
import { User } from 'shared/interfaces';

describe('Profile component', () => {
  const user: User = {
    id: '1',
    nickname: 'John',
    signature: 'userR',
    privateAccount: false,
    avatarLarger: 'avatar url'
  };

  const handlers = [
    rest.get('https://tiktok33.p.rapidapi.com/user/info/dave.xp', (req, res, ctx) => {
      return res(ctx.json(user), ctx.delay(150));
    })
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen({
    onUnhandledRequest: ({method, url}) => {
      if (!url.pathname.includes('/user/info')) {
        throw new Error('Forbidden request');
      }
    }
  }))
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render properly', async () => {
    render(<Profile />);
    expect(screen.getByText('User Info')).toBeInTheDocument();
    expect(await screen.findByText('Name: ' + user.nickname)).toBeInTheDocument();
    expect(await screen.findByText('Is account private: no')).toBeInTheDocument();
  });

  it('should switch pages', async () => {
    render(<Profile />);
    fireEvent.click(await screen.findByText('3'));
    expect(screen.getByText('3')).toHaveClass('Mui-selected');
  });
});
