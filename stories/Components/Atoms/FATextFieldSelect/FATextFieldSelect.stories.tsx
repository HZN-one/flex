import React from "react";
import { FATextField, FAIcon } from "@Atoms";
import { IInput } from "@Atoms/FATextField/Input.interface";
import { MenuItem } from "@mui/material";
import { Box } from "@mui/system";

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

export const RightIcon = (props: IInput) => (
  <Box width={"300px"}>
    <FATextField fullWidth {...props} select value={1}>
      <MenuItem value={1}>Standard</MenuItem>
    </FATextField>
  </Box>
);

export const LeftIcon = (props: IInput) => (
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

export const LeftRightIcon = (props: IInput) => (
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
