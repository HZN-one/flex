import React from "react";
import { ComponentStory } from "@storybook/react";
import { FATextField, FAFormControl } from "Components";
import { IInput } from "Components/Atoms/FATextField/Input.interface";
import { IFAFormControl } from "@Atoms/FAFormControl/FAFormControl.interfaces";

const story = {
  title: "Text Field",
  component: FATextField,
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "Label",
  },
};

export default story;

const Template: ComponentStory<typeof FATextField> = (props: IInput) => (
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
    <FATextField {...props}>{props.children}</FATextField>
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
