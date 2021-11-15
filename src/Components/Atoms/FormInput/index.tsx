import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText, InputAdornment } from '@mui/material';
// import NativeSelect from '@mui/material/NativeSelect';
import Input from '@mui/material/Input';

import { IFormInput } from './FormInput.interface';

const BootstrapInput = styled(Input)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInput-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export const FormInputPegasus = memo((props: IFormInput) => {

  const { testID, type, label, helperText, onChange, adornment, adornmentPosition, value, MenuItems, ...materialUIProps } = props;
  
  if (type !== 'select') {
    return (
      <div>
        <FormControl
          sx={{ m: 1 }}
          variant="standard" 
          data-testid={testID}
          {...materialUIProps}
        >
          <InputLabel
            htmlFor="component-textbox"
          >
            {label}
          </InputLabel>
          <Input
            id="component-textbox" 
            onChange={onChange}
            startAdornment={
              adornment ? (
                <InputAdornment position={adornmentPosition || 'start'}>
                  {adornment}
                </InputAdornment>
              ) : (
                null
              )
            }  
          />
          <FormHelperText id="component-error-text" error >{helperText}</FormHelperText>
        </FormControl>
      </div>
    );
  }
  
  return (
    <div>
      <FormControl
        sx={{ m: 1 }}
        variant="standard"
        data-testid={testID}
        {...materialUIProps}
      >
        <InputLabel id="component-select-label">{label}</InputLabel>
        <Select
          labelId="component-select-label"
          id="component-select"
          value={value}
          onChange={onChange}
          input={<BootstrapInput />}
          startAdornment={
            adornment ? (
              <InputAdornment position={adornmentPosition || 'start'}>
                {adornment}
              </InputAdornment>
            ) : (
              null
            )
          }
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

FormInputPegasus.displayName = 'FormInputPegasus';

