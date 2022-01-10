import React, { forwardRef, memo } from "react";
import { FormControl, InputLabel, Input } from "@mui/material";
import { IInput } from "./FAInput.interfaces";

export const FAInput = memo(
  forwardRef((props: IInput, ref) => {
    const {
      label,
      helperText,
      variant,
      hook,
      testID,
      error,
      type,
      className,
      placeholder,
      required,
      htmlFor,
      shrink,
      endAdornment,
      startAdornment,
      ...materialUIProps
    } = props;

    return (
      <>
        <FormControl
          variant={variant ?? "standard"}
          fullWidth
          required={required}
          className={className}
        >
          <InputLabel htmlFor={htmlFor} shrink={shrink}>
            {label}
          </InputLabel>
          <Input
            {...materialUIProps}
            inputRef={ref}
            data-testid={testID}
            endAdornment={endAdornment}
            startAdornment={startAdornment}
            {...hook}
            error={error}
            type={type}
            placeholder={placeholder}
          />
          {helperText}
        </FormControl>
      </>
    );
  })
);

FAInput.displayName = "FAInput";
