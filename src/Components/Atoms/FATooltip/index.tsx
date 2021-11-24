import React, { memo } from 'react';
import { Tooltip } from '@mui/material';
import { IFATooltip } from './FATooltip.interface';

export const FATooltip = memo((props: IFATooltip) => {
  const { testID, title, children, ...materialUIProps } = props;
  return (
<Tooltip title='add' {...materialUIProps}>
  <p>hi</p>
</Tooltip>
  );
});

FATooltip.displayName = 'FATooltip';
