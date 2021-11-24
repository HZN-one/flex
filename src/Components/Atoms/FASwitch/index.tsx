import React, { memo } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { IFASwitch } from './FASwitch.interface';

export const FASwitch = memo((props: IFASwitch) => {
  const { testID, label, ...materialUIProps } = props;
  return (
    <FormControlLabel
      control={
        <Switch
          data-testid={testID}
          {...materialUIProps}
        />
      }
      label={label || ''}
    />
  );
});

FASwitch.displayName = 'FASwitch';
