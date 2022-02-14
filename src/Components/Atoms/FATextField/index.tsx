import React, { forwardRef, memo } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { IInput } from "./Input.interface";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  default: {
    "& .MuiInputLabel-root": {
      fontSize: "12px",
      fontWeight: 600,
      color: "#221F20",
    },
  },
}));

export const FATextField = memo(
  forwardRef((props: IInput, ref) => {
    const {
      name,
      testID,
      adornment,
      adornmentPosition,
      variants,
      ...materialUIProps
    } = props;
    const classes = useStyles();
    const AddAdornment = () => {
      return <InputAdornment position="start">{adornment}</InputAdornment>;
    };

    const startAdornment =
      adornment && adornmentPosition === "start" ? AddAdornment() : null;

    const endAdornment =
      adornment && adornmentPosition === "end" ? AddAdornment() : null;

    return (
      <TextField
        className={!props.select ? classes.default : ""}
        inputRef={ref}
        data-testid={testID}
        name={name}
        variant={variants}
        {...materialUIProps}
        InputProps={{
          startAdornment: startAdornment,
          endAdornment: endAdornment,
        }}
      />
    );
  })
);

FATextField.displayName = "FATextField";
