import React, { forwardRef, memo } from "react";
import { FormControl, Input, FormHelperText } from "@mui/material";
import { IInput } from "./FAInput.interfaces";
import { FATypography } from "@Atoms/FATypography";

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
          <FATypography
            testID="typography-input"
            sx={{
              fontSize: "12px",
              color: "#221F20",
              fontWeight: 600,
              letterSpacing: "0.2px",
            }}
          >
            {label}{" "}
            <>{required && <span style={{ color: "#F43F5E" }}>*</span>}</>
          </FATypography>
          <Input
            {...materialUIProps}
            inputRef={ref}
            data-testid={testID}
            endAdornment={endAdornment}
            startAdornment={startAdornment}
            {...hook}
            required
            error={error}
            type={type}
            placeholder={placeholder}
          />
          <FormHelperText sx={{ mt: "8px", color: error ? "red" : "inherit" }}>
            {helperText}
          </FormHelperText>
        </FormControl>
      </>
    );
  })
);

FAInput.displayName = "FAInput";
