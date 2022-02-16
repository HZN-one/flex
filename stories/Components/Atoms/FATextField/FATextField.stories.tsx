import React from "react";
import { FATextField, FAIcon } from "@Atoms";
import { IInput } from "@Atoms/FATextField/Input.interface";
import { Box } from "@mui/system";

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

export const Default = (props: IInput) => (
  <Box width={"300px"}>
    <FATextField fullWidth {...props} />
  </Box>
);
export const NoIcon = (props: IInput) => {
  return (
    <Box width={"300px"}>
      <FATextField fullWidth variants="standard" {...props} />
    </Box>
  );
};

export const RightIcon = (props: IInput) => {
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

export const LeftIcon = (props: IInput) => {
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
