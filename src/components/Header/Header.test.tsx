import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import { Header } from '.';

describe('Header', () => {
  
  it('should render properly', () => {
    render(<Header />);
    expect(screen.getByText('Feed')).toBeInTheDocument();
  });

  it('should redirect with button links', () => {
    render(<Header />);
    fireEvent.click(screen.getByText('Feed'));
    expect(window.location.href).toEqual('http://localhost/feed');

    fireEvent.click(screen.getByText('Profile'));
    expect(window.location.href).toEqual('http://localhost/profile');
  });
});
