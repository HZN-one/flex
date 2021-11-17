import React, { memo } from 'react';
import FormControl from '@mui/material/FormControl';
import { FormHelperText, InputAdornment, InputLabel, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

import { IFMFormTextField } from './FMFormTextField.interface';

export const FMFormTextField = memo((props: IFMFormTextField) => {

  const { testID, placeholder, type, label, helperText, onChange, adornment, adornmentPosition, value, MenuItems, ...materialUIProps } = props;

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
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
      <Typography variant="subtitle1" gutterBottom component="div">
        {label}
      </Typography>
      <FormControl
        sx={{ mt: 1, minWidth: '70%' }}
        data-testid={testID}
        disabled
        >
        <InputLabel htmlFor="component-error">{type == 'date' || type == 'time' ? 'pohon' : ''}</InputLabel>
        <TextField
          {...materialUIProps}
          type={type}
          placeholder={placeholder}
          variant='outlined'
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
    </div>
  );
});

FMFormTextField.displayName = 'FMFormTextField';

