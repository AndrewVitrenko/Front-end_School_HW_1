import React, {ChangeEvent} from 'react';
import {render, screen, fireEvent} from 'test-utils';
import {PaginationBar} from '.';
import {PaginationProps} from '../../interfaces';

describe('PaginationBar', () => {
  let props: PaginationProps;

  beforeEach(() => props = {
    current: 1,
    perPage: 10,
    length: 30,
    handleChange(e: ChangeEvent<unknown>, p: number) {
      props.current = p;
    }
  });

  it('should render properly', () => {
    render(<PaginationBar {...props} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should switch pages to chosen', () => {
    const {rerender} = render(<PaginationBar {...props} />);
    fireEvent.click(screen.getByText('3'));
    rerender(<PaginationBar {...props} />);
    expect(screen.getByText('3')).toHaveClass('Mui-selected');
  });

  it('should switch to prev/next', () => {
    const {rerender} = render(<PaginationBar {...props} />);
    fireEvent.click(screen.getByLabelText('Go to next page'));
    rerender(<PaginationBar {...props} />);
    expect(screen.getByText('2')).toHaveClass('Mui-selected');

    fireEvent.click(screen.getByLabelText('Go to previous page'));
    rerender(<PaginationBar {...props} />);
    expect(screen.getByText('1')).toHaveClass('Mui-selected');
  });
});
