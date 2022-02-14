import React from "react";
import { ComponentStory } from "@storybook/react";
import { FARadio, FAFormControlLabel } from "@Atoms";
import { IFARadio } from "@Atoms/FARadio/FARadio.interface";
import { IFAFormControlLabel } from "@Atoms/FAFormControlLabel/FAFormControlLabel.interfaces";

const story = {
  title: "Atom/Radio",
  component: FARadio,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

const Template: ComponentStory<typeof FARadio> = (props: IFARadio) => (
  <>
    <FARadio {...props} />
    <FARadio {...props} disabled />
    <FARadio {...props} checked color="primary" />
    <FARadio {...props} checked color="secondary" />
    <FARadio {...props} checked color="success" />
    <FARadio {...props} checked color="warning" />
    <FARadio {...props} checked color="error" />
    <FARadio {...props} checked color="info" />
  </>
);
export const Default = (props: IFARadio) => (
  <>
    <FARadio {...props} />
    <FARadio {...props} disabled />
  </>
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
export const WithLabel = (props: IFAFormControlLabel) => (
  <>
    <FAFormControlLabel
      {...props}
      label="default"
      testID="ControlLabel-test"
      control={<FARadio testID="radio-default" />}
    />
    <FAFormControlLabel
      {...props}
      label="disabled"
      testID="ControlLabel-test"
      control={<FARadio disabled testID="radio-disabled" />}
    />
    <FAFormControlLabel
      {...props}
      label="primary"
      testID="ControlLabel-test"
      control={<FARadio checked color="primary" testID="radio-primary" />}
    />
    <FAFormControlLabel
      {...props}
      label="secondary"
      testID="ControlLabel-test"
      control={<FARadio checked color="secondary" testID="radio-secondary" />}
    />
    <FAFormControlLabel
      {...props}
      label="success"
      testID="ControlLabel-test"
      control={<FARadio checked color="success" testID="radio-success" />}
    />
    <FAFormControlLabel
      {...props}
      label="warning"
      testID="ControlLabel-test"
      control={<FARadio checked color="warning" testID="radio-warning" />}
    />
    <FAFormControlLabel
      {...props}
      label="error"
      testID="ControlLabel-test"
      control={<FARadio checked color="error" testID="radio-error" />}
    />
    <FAFormControlLabel
      {...props}
      label="info"
      testID="ControlLabel-test"
      control={<FARadio checked color="info" testID="radio-info" />}
    />
  </>
);

export const WithLabelSmall = (props: IFAFormControlLabel) => (
  <>
    <FAFormControlLabel
      {...props}
      label="default"
      testID="ControlLabel-test"
      control={<FARadio testID="radio-default" size="small" />}
    />
    <FAFormControlLabel
      {...props}
      label="disabled"
      testID="ControlLabel-test"
      control={<FARadio disabled testID="radio-disabled" size="small" />}
    />
    <FAFormControlLabel
      {...props}
      label="primary"
      testID="ControlLabel-test"
      control={
        <FARadio checked color="primary" testID="radio-primary" size="small" />
      }
    />
    <FAFormControlLabel
      {...props}
      label="secondary"
      testID="ControlLabel-test"
      control={
        <FARadio
          checked
          color="secondary"
          testID="radio-secondary"
          size="small"
        />
      }
    />
    <FAFormControlLabel
      {...props}
      label="success"
      testID="ControlLabel-test"
      control={
        <FARadio checked color="success" testID="radio-success" size="small" />
      }
    />
    <FAFormControlLabel
      {...props}
      label="warning"
      testID="ControlLabel-test"
      control={
        <FARadio checked color="warning" testID="radio-warning" size="small" />
      }
    />
    <FAFormControlLabel
      {...props}
      label="error"
      testID="ControlLabel-test"
      control={
        <FARadio checked color="error" testID="radio-error" size="small" />
      }
    />
    <FAFormControlLabel
      {...props}
      label="info"
      testID="ControlLabel-test"
      control={
        <FARadio checked color="info" testID="radio-info" size="small" />
      }
    />
  </>
);
