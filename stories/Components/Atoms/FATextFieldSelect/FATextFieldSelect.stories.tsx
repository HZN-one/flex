import React from "react";
import { MenuItem } from "@mui/material";
import { Box } from "@mui/system";

import { FATextField, FAIcon } from "@Atoms";
import { IFATextFieldProps } from "@Atoms/FATextField/FATextField.interface";

const story = {
  title: "Atom/Text Field Select",
  component: FATextField,
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "Label",
  },
};

export default story;

export const RightIcon = (props: IFATextFieldProps) => (
  <Box width={"300px"}>
    <FATextField fullWidth {...props} select value={1}>
      <MenuItem value={1}>Standard</MenuItem>
    </FATextField>
  </Box>
);

export const LeftIcon = (props: IFATextFieldProps) => (
  <Box width={"300px"}>
    <FATextField
      fullWidth
      {...props}
      select
      value={""}
      adornmentPosition="start"
      adornment={<FAIcon testID="icon-add">visibility</FAIcon>}
      SelectProps={{ IconComponent: () => <span></span> }}
    >
      <MenuItem value={1}>Standard</MenuItem>
    </FATextField>
  </Box>
);

export const LeftRightIcon = (props: IFATextFieldProps) => (
  <Box width={"300px"}>
    <FATextField
      fullWidth
      {...props}
      select
      value={""}
      adornmentPosition="start"
      adornment={<FAIcon testID="icon-add">visibility</FAIcon>}
    >
      <MenuItem value={1}>Standard</MenuItem>
    </FATextField>
  </Box>
);
