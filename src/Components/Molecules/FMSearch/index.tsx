import React, { memo } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { IFMSearch } from "./FMSearch.interfaces";
import SearchIcon from "@mui/icons-material/Search";

export const FMSearch = memo((props: IFMSearch) => {
  const {
    disabled,
    variants,
    type,
    testID,
    value,
    label,
    helperText,
    onChange,
    ...materialUIProps
  } = props;

  return (
    <TextField
      {...materialUIProps}
      disabled={disabled}
      type={type}
      label={label}
      variant={variants}
      onChange={onChange}
      value={value}
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="secondary"></SearchIcon>
          </InputAdornment>
        ),
      }}
    />
  );
});

FMSearch.displayName = "FMSearch";
