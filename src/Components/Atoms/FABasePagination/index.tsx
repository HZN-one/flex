import React, { memo } from 'react';
import { Pagination, Stack } from '@mui/material';
import { IFABasePagination } from './FABasePagination.interface';

export const FABasePagination = memo((props: IFABasePagination) => {
  const { testID, label, ...materialUIProps } = props;
  return (
    <Stack spacing={2}>
      <Pagination count={10}
        data-testid={testID}
        {...materialUIProps}  
      />
    </Stack>
  );
});

FABasePagination.displayName = 'FABasePagination';
