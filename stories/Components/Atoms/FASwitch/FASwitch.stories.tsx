import React from "react";
import { FASwitch, FAFormControlLabel } from "@Atoms";
import { IFASwitch } from "@Atoms/FASwitch/FASwitch.interface";
import { IFAFormControlLabel } from "@Atoms/FAFormControlLabel/FAFormControlLabel.interfaces";

const story = {
  title: "Atom/Switch",
  component: FASwitch,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;
export const Default = (props: IFASwitch) => (
  <>
    <FASwitch {...props} />
  </>
);

export const Small = (props: IFASwitch) => (
  <>
    <FASwitch {...props} color="default" checked size="small" />
    <FASwitch {...props} color="primary" checked size="small" />
    <FASwitch {...props} color="secondary" checked size="small" />
    <FASwitch {...props} color="error" checked size="small" />
    <FASwitch {...props} color="warning" checked size="small" />
    <FASwitch {...props} color="info" checked size="small" />
    <FASwitch {...props} color="success" checked size="small" />
  </>
);
export const Medium = (props: IFASwitch) => (
  <>
    <FASwitch {...props} color="default" checked />
    <FASwitch {...props} color="primary" checked />
    <FASwitch {...props} color="secondary" checked />
    <FASwitch {...props} color="error" checked />
    <FASwitch {...props} color="warning" checked />
    <FASwitch {...props} color="info" checked />
    <FASwitch {...props} color="success" checked />
  </>
);

export const WithLabel = (props: IFAFormControlLabel) => (
  <>
    <FAFormControlLabel
      {...props}
      label="default"
      testID="ControlLabel-test"
      control={<FASwitch testID="switch-test" color="default" checked />}
    />
    <FAFormControlLabel
      {...props}
      label="primary"
      testID="ControlLabel-test"
      control={<FASwitch testID="switch-test" color="primary" checked />}
    />
    <FAFormControlLabel
      {...props}
      label="secondary"
      testID="ControlLabel-test"
      control={<FASwitch testID="switch-test" color="secondary" checked />}
    />
    <FAFormControlLabel
      {...props}
      label="error"
      testID="ControlLabel-test"
      control={<FASwitch testID="switch-test" color="error" checked />}
    />
    <FAFormControlLabel
      {...props}
      label="warning"
      testID="ControlLabel-test"
      control={<FASwitch testID="switch-test" color="warning" checked />}
    />
    <FAFormControlLabel
      {...props}
      label="info"
      testID="ControlLabel-test"
      control={<FASwitch testID="switch-test" color="info" checked />}
    />
    <FAFormControlLabel
      {...props}
      label="success"
      testID="ControlLabel-test"
      control={<FASwitch testID="switch-test" color="success" checked />}
    />
  </>
);

export const WithLabelSmall = (props: IFAFormControlLabel) => (
  <>
    <FAFormControlLabel
      {...props}
      label="default"
      testID="ControlLabel-test"
      control={
        <FASwitch testID="switch-test" color="default" checked size="small" />
      }
    />
    <FAFormControlLabel
      {...props}
      label="primary"
      testID="ControlLabel-test"
      control={
        <FASwitch testID="switch-test" color="primary" checked size="small" />
      }
    />
    <FAFormControlLabel
      {...props}
      label="test"
      testID="ControlLabel-test"
      control={
        <FASwitch testID="switch-test" color="secondary" checked size="small" />
      }
    />
    <FAFormControlLabel
      {...props}
      label="error"
      testID="ControlLabel-test"
      control={
        <FASwitch testID="switch-test" color="error" checked size="small" />
      }
    />
    <FAFormControlLabel
      {...props}
      label="warning"
      testID="ControlLabel-test"
      control={
        <FASwitch testID="switch-test" color="warning" checked size="small" />
      }
    />
    <FAFormControlLabel
      {...props}
      label="info"
      testID="ControlLabel-test"
      control={
        <FASwitch testID="switch-test" color="info" checked size="small" />
      }
    />
    <FAFormControlLabel
      {...props}
      label="success"
      testID="ControlLabel-test"
      control={
        <FASwitch testID="switch-test" color="success" checked size="small" />
      }
    />
  </>
);
