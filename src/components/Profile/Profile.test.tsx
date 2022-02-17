import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import { Profile } from '.';
import { User } from 'interfaces';

describe('Profile component', () => {
  const user: User = {
    id: '1',
    nickname: 'John',
    signature: 'userR',
    privateAccount: false,
    avatarLarger: 'avatar url'
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(user),
        ok: true,
      })
    ) as jest.Mock;
  });

  it('should render properly', async () => {
    const { container } = render(<Profile />);
    expect(container.firstChild).toHaveClass('profile-page');
    expect(await screen.findByText('Name: ' + user.nickname)).toBeInTheDocument();
    expect(await screen.findByText('Is account private: no')).toBeInTheDocument();
  });

  it('should switch pages', async () => {
    render(<Profile />);
    fireEvent.click(await screen.findByText('3'));
    expect(screen.getByText('3')).toHaveClass('Mui-selected');
  });
});
