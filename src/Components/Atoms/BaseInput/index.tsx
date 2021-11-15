import React, { memo } from 'react';
import { FormControl, TextField, InputAdornment, FormHelperText } from '@mui/material';
import { IInput } from './Input.interface';

export const BaseInput = memo((props: IInput) => {
  const { variant, testID, value, label, adornment, adornmentPosition, helperText, onChange, ...materialUIProps } = props;
  return (
    <FormControl {...materialUIProps} data-testid={testID}>
        <TextField
          label={label}
          variant={variant || 'standard'}
          onChange={onChange}
          value={value}
          InputProps={{
            startAdornment: (
              adornment && adornmentPosition === 'start' ? (
                <InputAdornment position="start">
                {adornment}
              </InputAdornment>
              ) : null
            ),
            endAdornment: (
              adornment && adornmentPosition === 'end' ? (
                <InputAdornment position="start">
                {adornment}
              </InputAdornment>
              ) : null
            ),
          }}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text" error >{helperText}</FormHelperText>
      </FormControl>
  );
});

BaseInput.displayName = 'BaseInput';
