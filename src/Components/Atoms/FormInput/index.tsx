import React, { memo } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FormHelperText, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

import { IFormInput } from './FormInput.interface';


export const FormInput = memo((props: IFormInput) => {

  const { testID, placeholder, type, label, helperText, onChange, adornment, adornmentPosition, value, MenuItems, ...materialUIProps } = props;
  
  if (type !== 'select') {
    return (
      <FormControl {...materialUIProps} data-testid={testID}>
        <TextField
          placeholder={placeholder}
          label={label}
          variant='outlined'
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
  }
  
  return (
    <div>
      <FormControl
        sx={{ minWidth: 130 }}
        variant="outlined"
        data-testid={testID}
        {...materialUIProps}
      >
        <InputLabel id="component-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label={label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {MenuItems && MenuItems?.length > 0 ? MenuItems.map((oneMenuItem, i) => {
            return <MenuItem key={i} value={oneMenuItem.value}>{oneMenuItem.name}</MenuItem>;
          }) :  null}
        </Select>
        <FormHelperText id="component-error-text" error >{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
});

FormInput.displayName = 'FormInput';

