import React, { memo } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FormHelperText, InputAdornment, InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';

import { IFormInput } from './FormInput.interface';

export const FormInput = memo((props: IFormInput) => {

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


  if (type !== 'select') {
    return (
      <FormControl
        sx={{ mt: 1, minWidth: 130 }}
        data-testid={testID}
        {...materialUIProps}
      >
        <InputLabel htmlFor="component-error">{type == 'date' || type == 'time' ? 'pohon' : ''}</InputLabel>
        <TextField
          type={type}
          placeholder={placeholder}
          label={type !== 'date' && type !== 'time' && label}
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
    );
  }
  
  return (
    <div>
      <FormControl
        sx={{ mt: 1, minWidth: 130 }}
        variant="outlined"
        data-testid={testID}
        {...materialUIProps}
      >
        <TextField
          select
          id="demo-simple-select-standard"
          label={label}
          InputProps={{
            startAdornment: (
              startAdornment
            ),
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {MenuItems && MenuItems?.length > 0 ? MenuItems.map((oneMenuItem, i) => {
            return <MenuItem key={i} value={oneMenuItem.value}>{oneMenuItem.name}</MenuItem>;
          }) :  null}
        </TextField>
        <FormHelperText id="component-error-text" error >{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
});

FormInput.displayName = 'FormInput';

