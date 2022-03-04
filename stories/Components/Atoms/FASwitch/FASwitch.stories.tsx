import React from "react";
import { FASwitch, FAFormControlLabel } from "@Atoms";

import { IFASwitchProps } from "@Atoms/FASwitch/FASwitch.interface";
import { IFAFormControlLabelProps } from "@Atoms/FAFormControlLabel/FAFormControlLabel.interface";

const story = {
  title: "Atom/Switch",
  component: FASwitch,
  argTypes: {
    children: { control: "text" },
  },
};

export default story;
export const Default = (props: IFASwitchProps) => (
  <>
    <FASwitch {...props} />
  </>
);

export const Small = (props: IFASwitchProps) => (
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
export const Medium = (props: IFASwitchProps) => (
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

export const WithLabelMedium = (props: IFAFormControlLabelProps) => (
  <>
    <div>
      <FAFormControlLabel
        {...props}
        label="default"
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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

export const WithLabelSmall = (props: IFAFormControlLabelProps) => (
  <>
    <div>
      <FAFormControlLabel
        {...props}
        label="default"
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
        testID="form-control-label-test"
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
