import React, { forwardRef, memo } from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import { IInput } from "./Input.interface";
import { InputLabel } from "@mui/material";

export const FAStandardInput = memo(
  forwardRef((props: IInput, ref) => {
    const { label, helperText, focusedText, testID, ...materialUIProps } =
      props;

    function MyFormHelperText() {
      const { focused } = useFormControl() || {};

      const helperText2 = React.useMemo(() => {
        if (focused) {
          return focusedText;
        }

        return helperText;
      }, [focused]);

      return <FormHelperText>{helperText2}</FormHelperText>;
    }

    return (
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: "25ch" }}>
          <InputLabel>{label}</InputLabel>
          <Input data-testid={testID} inputRef={ref} {...materialUIProps} />
          <MyFormHelperText />
        </FormControl>
      </Box>
    );
  })
);

FAStandardInput.displayName = "FAStandardInput";
