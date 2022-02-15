import React from "react";
import { ComponentStory } from "@storybook/react";
import { FATextField, FAFormControl } from "@Atoms";
import { IInput } from "@Atoms/FATextField/Input.interface";
import { IFAFormControl } from "@Atoms/FAFormControl/FAFormControl.interfaces";
import { MenuItem } from "@mui/material";

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

const Template: ComponentStory<typeof FATextField> = props => (
  <FATextField {...props} />
);

const Template2: ComponentStory<typeof FAFormControl> = (
  props: IFAFormControl
) => (
  <FAFormControl {...props}>
    <FATextField testID="input-test" label="test"></FATextField>
  </FAFormControl>
);

export const Default = (props: IInput) => (
  <>
    <FATextField
      {...props}
      variant="standard"
      helperText="test"
      placeholder="Placeholder"
      required
    >
      {props.children}
    </FATextField>
  </>
);

export const Select = (props: IInput) => (
  <>
    <FATextField
      {...props}
      select
      value={1}
      sx={{ width: "220px" }}
      adornment="kg"
      adornmentPosition="start"
    >
      <MenuItem value={1}>This is filled</MenuItem>
    </FATextField>
  </>
);

export const WithAdornment = Template.bind({});
WithAdornment.args = {
  adornment: "kg",
  adornmentPosition: "start",
};

export const WithAdornmentAtEnd = Template.bind({});
WithAdornmentAtEnd.args = {
  adornment: "kg",
  adornmentPosition: "end",
};

export const WithHelperText = Template2.bind({});
WithHelperText.args = {
  helperText: `it can't be empty`,
};

export const Outlined = (props: IInput) => (
  <>
    <FATextField variants="outlined" {...props}>
      {props.children}
    </FATextField>
  </>
);

export const Filled = (props: IInput) => (
  <>
    <FATextField variants="filled" {...props}>
      {props.children}
    </FATextField>
  </>
);
