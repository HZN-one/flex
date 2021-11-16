import React, { memo } from 'react';
import { FormControl, TextField, InputAdornment, FormHelperText } from '@mui/material';
import { IInput } from './Input.interface';

export const BaseInput = memo((props: IInput) => {
  const {  type, variant, testID, value, label, adornment, adornmentPosition, helperText, onChange, ...materialUIProps } = props;

  const AddAdornment = () => {
    return (
      <InputAdornment position="start">
        {adornment}
      </InputAdornment>
    );
  };

  const startAdornment = adornment && adornmentPosition === 'start' ? (
    AddAdornment()
  ) : null;

  const endAdornment = adornment && adornmentPosition === 'end' ? (
    AddAdornment()
  ) : null;

  return (
    <FormControl {...materialUIProps} data-testid={testID}>
        <TextField
          type={type}
          label={label}
          variant={variant || 'standard'}
          onChange={onChange}
          value={value}
          InputProps={{
            startAdornment: (
              startAdornment
            ),
            endAdornment: (
              endAdornment
            ),
          }}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text" error >{helperText}</FormHelperText>
      </FormControl>
  );
});

BaseInput.displayName = 'BaseInput';
