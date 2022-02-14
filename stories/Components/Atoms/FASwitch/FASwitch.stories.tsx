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
};

export default story;
export const Default = (props: IFASwitch) => (
  <>
    <FASwitch {...props} />
  </>
);

export const Small = (props: IFASwitch) => (
  <>
    <div>
      <FASwitch {...props} color="default" defaultChecked size="small" />
    </div>
    <div>
      <FASwitch {...props} color="primary" defaultChecked size="small" />
    </div>
    <div>
      <FASwitch {...props} color="secondary" defaultChecked size="small" />
    </div>
    <div>
      <FASwitch {...props} color="error" defaultChecked size="small" />
    </div>
    <div>
      <FASwitch {...props} color="warning" defaultChecked size="small" />
    </div>
    <div>
      <FASwitch {...props} color="info" defaultChecked size="small" />
    </div>
    <div>
      <FASwitch {...props} color="success" defaultChecked size="small" />
    </div>
  </>
);
export const Medium = (props: IFASwitch) => (
  <>
    <div>
      <FASwitch {...props} color="default" defaultChecked size="medium" />
    </div>
    <div>
      <FASwitch {...props} color="primary" defaultChecked size="medium" />
    </div>
    <div>
      <FASwitch {...props} color="secondary" defaultChecked size="medium" />
    </div>
    <div>
      <FASwitch {...props} color="error" defaultChecked size="medium" />
    </div>
    <div>
      <FASwitch {...props} color="warning" defaultChecked size="medium" />
    </div>
    <div>
      <FASwitch {...props} color="info" defaultChecked size="medium" />
    </div>
    <div>
      <FASwitch {...props} color="success" defaultChecked size="medium" />
    </div>
  </>
);

export const WithLabelMedium = (props: IFAFormControlLabel) => (
  <>
    <div>
      <FAFormControlLabel
        {...props}
        label="default"
        testID="ControlLabel-test"
        size="medium"
        control={
          <FASwitch
            testID="switch-test"
            color="default"
            defaultChecked
            size="medium"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="primary"
        testID="ControlLabel-test"
        size="medium"
        control={
          <FASwitch
            testID="switch-test"
            color="primary"
            defaultChecked
            size="medium"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="secondary"
        testID="ControlLabel-test"
        size="medium"
        control={
          <FASwitch
            testID="switch-test"
            color="secondary"
            defaultChecked
            size="medium"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="error"
        testID="ControlLabel-test"
        size="medium"
        control={
          <FASwitch
            testID="switch-test"
            color="error"
            defaultChecked
            size="medium"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="warning"
        testID="ControlLabel-test"
        size="medium"
        control={
          <FASwitch
            testID="switch-test"
            color="warning"
            defaultChecked
            size="medium"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="info"
        testID="ControlLabel-test"
        size="medium"
        control={
          <FASwitch
            testID="switch-test"
            color="info"
            defaultChecked
            size="medium"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="success"
        testID="ControlLabel-test"
        size="medium"
        control={
          <FASwitch
            testID="switch-test"
            color="success"
            defaultChecked
            size="medium"
          />
        }
      />
    </div>
  </>
);

export const WithLabelSmall = (props: IFAFormControlLabel) => (
  <>
    <div>
      <FAFormControlLabel
        {...props}
        label="default"
        testID="ControlLabel-test"
        size="small"
        control={
          <FASwitch
            testID="switch-test"
            color="default"
            defaultChecked
            size="small"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="primary"
        testID="ControlLabel-test"
        size="small"
        control={
          <FASwitch
            testID="switch-test"
            color="primary"
            defaultChecked
            size="small"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="secondary"
        testID="ControlLabel-test"
        size="small"
        control={
          <FASwitch
            testID="switch-test"
            color="secondary"
            defaultChecked
            size="small"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="error"
        testID="ControlLabel-test"
        size="small"
        control={
          <FASwitch
            testID="switch-test"
            color="error"
            defaultChecked
            size="small"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="warning"
        testID="ControlLabel-test"
        size="small"
        control={
          <FASwitch
            testID="switch-test"
            color="warning"
            defaultChecked
            size="small"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="info"
        testID="ControlLabel-test"
        size="small"
        control={
          <FASwitch
            testID="switch-test"
            color="info"
            defaultChecked
            size="small"
          />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="success"
        testID="ControlLabel-test"
        size="small"
        control={
          <FASwitch
            testID="switch-test"
            color="success"
            defaultChecked
            size="small"
          />
        }
      />
    </div>
  </>
);
