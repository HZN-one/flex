import React, { memo } from "react";
import { FormControlLabel } from "@mui/material";
import { IFAFormControlLabel } from "./FAFormControlLabel.interfaces";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  labelSmall: {
    fontSize: "14px",
  },
  labelMedium: {
    fontSize: "16px",
  },
});
export const FAFormControlLabel = memo((props: IFAFormControlLabel) => {
  const { testID, label, control, size, ...materialUIProps } = props;
  const classes = useStyles();
  return (
    <FormControlLabel
      data-testid={testID}
      classes={{
        label: size === "medium" ? classes.labelMedium : classes.labelSmall, // Pass your override css here
      }}
      control={control}
      {...materialUIProps}
      label={label}
    />
  );
});

FAFormControlLabel.displayName = "FAFormControlLabel";
