import React from "react";
import { ComponentStory } from "@storybook/react";

import { FARadio, FAFormControlLabel } from "@Atoms";
import { IFARadioProps } from "@Atoms/FARadio/FARadio.interface";
import { IFAFormControlLabelProps } from "@Atoms/FAFormControlLabel/FAFormControlLabel.interface";

const story = {
  title: "Atom/Radio",
  component: FARadio,
  argTypes: {
    children: { control: "text" },
  },
};

export default story;

const Template: ComponentStory<typeof FARadio> = (props: IFARadioProps) => (
  <>
    <div>
      <FARadio {...props} />
    </div>
    <div>
      <FARadio {...props} disabled />
    </div>
    <div>
      <FARadio {...props} checked color="primary" />
    </div>
    <div>
      <FARadio {...props} checked color="secondary" />
    </div>
    <div>
      <FARadio {...props} checked color="success" />
    </div>
    <div>
      <FARadio {...props} checked color="warning" />
    </div>
    <div>
      <FARadio {...props} checked color="error" />
    </div>
    <div>
      <FARadio {...props} checked color="info" />
    </div>
  </>
);
export const Default = (props: IFARadioProps) => (
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
export const WithLabelMedium = (props: IFAFormControlLabelProps) => (
  <>
    <div>
      <FAFormControlLabel
        {...props}
        label="default"
        testID="form-control-label-test"
        control={<FARadio testID="radio-default" size="medium" />}
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="disabled"
        testID="form-control-label-test"
        control={<FARadio disabled testID="radio-disabled" size="medium" />}
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="primary"
        testID="form-control-label-test"
        control={
          <FARadio
            checked
            color="primary"
            testID="radio-primary"
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
          <FARadio
            checked
            color="secondary"
            testID="radio-secondary"
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
          <FARadio
            checked
            color="success"
            testID="radio-success"
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
          <FARadio
            checked
            color="warning"
            testID="radio-warning"
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
          <FARadio checked color="error" testID="radio-error" size="medium" />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="info"
        testID="form-control-label-test"
        control={
          <FARadio checked color="info" testID="radio-info" size="medium" />
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
        control={<FARadio testID="radio-default" size="small" />}
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="disabled"
        testID="form-control-label-test"
        control={<FARadio disabled testID="radio-disabled" size="small" />}
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="primary"
        testID="form-control-label-test"
        control={
          <FARadio
            checked
            color="primary"
            testID="radio-primary"
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
          <FARadio
            checked
            color="secondary"
            testID="radio-secondary"
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
          <FARadio
            checked
            color="success"
            testID="radio-success"
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
          <FARadio
            checked
            color="warning"
            testID="radio-warning"
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
          <FARadio checked color="error" testID="radio-error" size="small" />
        }
      />
    </div>
    <div>
      <FAFormControlLabel
        {...props}
        label="info"
        testID="form-control-label-test"
        control={
          <FARadio checked color="info" testID="radio-info" size="small" />
        }
      />
    </div>
  </>
);
