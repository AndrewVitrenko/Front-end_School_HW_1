import React from 'react';
import { Pagination } from '@mui/material';
import { PaginationProps } from 'shared/interfaces';
import { PagBar } from './PaginationBar.styled';

export const PaginationBar: React.FC<PaginationProps> = ({ handleChange, current, perPage, length }) => {
  return (
    <PagBar spacing={2}>
        <Pagination
          count={Math.ceil(length / perPage)}
          onChange={handleChange}
          page={current}
          shape="rounded"
          sx={{
            '& .MuiPagination-ul': {
              justifyContent: 'center'
            }
          }}
        />
      </PagBar>
  )
};
