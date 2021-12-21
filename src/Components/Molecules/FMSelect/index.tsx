import React, { memo } from "react";
import { InputAdornment } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { ISelectInput } from "./FMSelect.interfaces";
import { FATextField } from "@Atoms";

export const FMSelect = memo((props: ISelectInput) => {
  const { MenuItems, size, label, adornment } = props;

  return (
    <>
      <FATextField
        testID="input-select"
        label={label}
        size={size || "medium"}
        id="demo-simple-select-standard"
        select
        adornmentPosition="start"
        adornment={
          <InputAdornment position="start">{adornment}</InputAdornment>
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {MenuItems && MenuItems?.length > 0
          ? MenuItems.map((oneMenuItem, i) => {
              return (
                <MenuItem key={i} value={oneMenuItem.value}>
                  {oneMenuItem.name}
                </MenuItem>
              );
            })
          : null}
      </FATextField>
    </>
  );
});

FMSelect.displayName = "FMSelect";
