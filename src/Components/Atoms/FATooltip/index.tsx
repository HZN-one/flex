import React, { memo } from 'react';
import { Tooltip } from '@mui/material';
import { IFATooltip } from './FATooltip.interface';

export const FATooltip = memo((props: IFATooltip) => {
  const { testID, title, ...materialUIProps } = props;
  return (
<Tooltip data-testid={testID} title='add' {...materialUIProps}>
  {props.children}
</Tooltip>
  );
});

FATooltip.displayName = 'FATooltip';
