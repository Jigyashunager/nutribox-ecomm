import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <div className='desktop-sho-pagination'>
    <Stack spacing={2}>
      <Pagination className='pagintation' boundaryCount={0} count={100} variant="outlined" shape="rounded" />
    </Stack>
    </div>
  );
}