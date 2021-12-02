import React, { memo } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { IInput } from "./Input.interface";

export const FATextField = memo((props: IInput) => {
  const {
    name,
    testID,
    adornment,
    adornmentPosition,
    variants,
    ...materialUIProps
  } = props;

  const AddAdornment = () => {
    return <InputAdornment position="start">{adornment}</InputAdornment>;
  };

  const startAdornment =
    adornment && adornmentPosition === "start" ? AddAdornment() : null;

  const endAdornment =
    adornment && adornmentPosition === "end" ? AddAdornment() : null;

  return (
    <TextField
      data-testid={testID}
      name={name}
      variant={variants}
      {...materialUIProps}
      InputProps={{
        startAdornment: startAdornment,
        endAdornment: endAdornment,
      }}
      aria-describedby="component-error-text"
    />
  );
});

FATextField.displayName = "FATextField";
