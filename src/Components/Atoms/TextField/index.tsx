import React, { memo } from 'react';
import { FormControl, InputLabel, Input, InputAdornment, FormHelperText } from '@mui/material';
import { IInput } from './Input.interface';

export const TextFieldPegasus = memo((props: IInput) => {
  const { testID, value, label, adornment, adornmentPosition, helperText, onChange, ...materialUIProps } = props;
  return (
    <FormControl variant='standard' {...materialUIProps} data-testid={testID}>
        <InputLabel htmlFor="component-error">{label}</InputLabel>
        <Input
          onChange={onChange}
          value={value}
          startAdornment={
            adornment ? (
              <InputAdornment position={adornmentPosition || 'start'}>
                {adornment}
              </InputAdornment>
            ) : (
              null
            )
          }
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text" error >{helperText}</FormHelperText>
      </FormControl>
  );
});

TextFieldPegasus.displayName = 'TextFieldPegasus';
