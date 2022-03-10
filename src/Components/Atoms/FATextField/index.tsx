import React, { forwardRef, memo } from "react";
import { TextField, InputAdornment } from "@mui/material";

import { IFATextFieldProps } from "./FATextField.interface";

export const FATextField = memo(
  forwardRef((props: IFATextFieldProps, ref) => {
    const {
      name,
      testID,
      adornment,
      adornmentPosition,
      variants,
      required,
      disabled,
      size,
      helperText,
      error,
      placeholder,
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
        inputRef={ref}
        data-testid={testID}
        name={name}
        variant={variants}
        disabled={disabled}
        required={required}
        size={size}
        helperText={helperText}
        error={error}
        placeholder={placeholder}
        InputProps={{
          startAdornment: startAdornment,
          endAdornment: endAdornment,
        }}
        {...materialUIProps}
      />
    );
  })
);

FATextField.displayName = "FATextField";
