import React from "react";
import { Box } from "@mui/system";

import { FATextField, FAIcon } from "@Atoms";
import { IFATextFieldProps } from "@Atoms/FATextField/FATextField.interface";

const story = {
  title: "Atom/Text Field",
  component: FATextField,
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "Label",
  },
};

export default story;

export const Default = (props: IFATextFieldProps) => (
  <Box width={"300px"}>
    <FATextField fullWidth {...props} />
  </Box>
);
export const NoIcon = (props: IFATextFieldProps) => {
  return (
    <Box width={"300px"}>
      <FATextField fullWidth variants="standard" {...props} />
    </Box>
  );
};

export const RightIcon = (props: IFATextFieldProps) => {
  return (
    <Box width={"300px"}>
      <FATextField
        fullWidth
        variants="standard"
        adornmentPosition="end"
        adornment={"kg"}
        {...props}
      />
    </Box>
  );
};

export const LeftIcon = (props: IFATextFieldProps) => {
  return (
    <Box width={"300px"}>
      <FATextField
        fullWidth
        variants="standard"
        adornmentPosition="start"
        adornment={<FAIcon testID="icon-add">email</FAIcon>}
        {...props}
      />
    </Box>
  );
};
