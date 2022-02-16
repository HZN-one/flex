import React, { memo } from "react";
import { Box, InputAdornment } from "@mui/material";

import { FAIcon, FATextField } from "@Atoms";
import { IFMSearch } from "./FMSearch.interfaces";

export const FMSearch = memo((props: IFMSearch) => {
  const { testID, ...materialUIProps } = props;

  return (
    <Box data-testid={testID}>
      <FATextField
        testID="input-search"
        adornment={
          <InputAdornment position="start">
            <FAIcon testID="icon-search" color="primary">
              search
            </FAIcon>
          </InputAdornment>
        }
        adornmentPosition="start"
        {...materialUIProps}
      />
    </Box>
  );
});

FMSearch.displayName = "FMSearch";
