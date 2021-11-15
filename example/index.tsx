import 'react-app-polyfill/ie11'
import React, { useState } from 'react'
import * as ReactDOM from 'react-dom'

import { ButtonPegasus, IconPegasus } from '../src'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple } from '@mui/material/colors'
import Button from '@mui/material/Button'

import { Icon } from '@mui/material'

import { baseTheme } from '../src'
import { ThemeProviderWrapper } from '../src'

import { TextField, FormHelperText, Input, InputLabel, InputBase } from '@mui/material'

import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { FormInputPegasus } from '../src'

// import * as React from 'react';
import { styled } from '@mui/material/styles';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
// import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
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

export default function CustomizedSelects() {
  const [age, setAge] = React.useState('');
  const handleChange = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Age</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}


export const newTheme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  palette: {
    primary: {
      main: '#DC3931',
      dark: '#DC3931',
      light: '#DC3931',
    },
    secondary: {
      main: '#DC3931',
      dark: '#262626',
      light: '#737373',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
})

console.log(newTheme)

const App = () => {
  const [Number, setNumber] = useState(0)
  return (
    <ThemeProviderWrapper
      replaceTheme={{
        typography: {
          fontFamily: 'Arial',
        },
        palette: {
          primary: {
            main: '#00FF00',
          },
        },
      }}
    >
      <>
      <FormInputPegasus testID='input-baru' label='nama' helperText='error' required type='select' MenuItems={[{value: 12, name: 'dwdw'}, {value: 10, name: 'ewew'}]}></FormInputPegasus>


      <TextField 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon>add_circle</Icon>
          </InputAdornment>
        )
      }}
      label='tets' id="outlined-start-adornment"
      sx={{ m: 1, width: '25ch' }} />

      <FormControl variant="standard"  >
        <InputLabel htmlFor="component-error">Name</InputLabel>
        <Input

          id="component-error"
          startAdornment={
            <InputAdornment position="start">
            <Icon>add_circle</Icon>
          </InputAdornment>
          }
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text" error >Error</FormHelperText>
      </FormControl>

      <InputBase placeholder='name'/>


        <ButtonPegasus
          // gradientColor="blue"
          variant="contained"
          testID="button-coba"
          color="primary"
          disabled
          onClick={() => setNumber(Number + 1)}
        >
          Pegasus
        </ButtonPegasus>
        {Number}
        <p>hihahdwdsdaw</p>

        <IconPegasus testID='icon-coba'
          iconName='android'
          color='primary'
          onClick={() => setNumber(Number + 1)}
        />
      </>
    </ThemeProviderWrapper>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
