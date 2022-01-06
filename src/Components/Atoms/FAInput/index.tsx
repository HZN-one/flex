import React, { memo } from "react";
import { FormControl, InputLabel, Input } from "@mui/material";
import { IInput } from "./FAInput.interfaces";

export const FAInput = memo((props: IInput) => {
  const {
    label,
    helperText,
    variants,
    hook,
    testID,
    error,
    type,
    className,
    placeholder,
    required,
    htmlFor,
    shrink,
    ...materialUIProps
  } = props;

  return (
    <>
      <FormControl
        variant={variants}
        fullWidth
        required={required}
        className={className}
      >
        <InputLabel htmlFor={htmlFor} shrink={shrink}>
          {label}
        </InputLabel>
        <Input
          {...materialUIProps}
          data-testid={testID}
          {...hook}
          error={error}
          type={type}
          placeholder={placeholder}
        />
        {helperText}
      </FormControl>
    </>
  );
});

FAInput.displayName = "FAInput";
