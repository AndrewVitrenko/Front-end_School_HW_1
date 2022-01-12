import React from 'react';
import { Pagination, Stack } from '@mui/material';
import { PaginationProps } from 'interfaces';

export const PaginationBar: React.FC<PaginationProps> = ({ handleChange, current, perPage, length }) => {
  return (
    <Stack spacing={2}>
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
      </Stack>
  )
};
