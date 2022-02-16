import React, { memo } from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { IFMSearch } from "./FMSearch.interfaces";
import { FATextField } from "@Atoms/FATextField";

export const FMSearch = memo((props: IFMSearch) => {
  const { testID, ...materialUIProps } = props;

  return (
    <div data-testid={testID}>
      <FATextField
        testID="input-search"
        adornment={
          <InputAdornment position="start">
            <SearchIcon color="primary"></SearchIcon>
          </InputAdornment>
        }
        adornmentPosition="start"
        {...materialUIProps}
      />
    </div>
  );
});

FMSearch.displayName = "FMSearch";
