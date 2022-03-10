import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

import { FAButton, FATextField } from "@Atoms";
import { IFOCardWithTextFieldProps } from "@Organisms/FOCardWithTextField/FOCardWithTextField.interface";
import { FOCardWithTextField } from "@Organisms/FOCardWithTextField";

const meta: Meta = {
  title: "Organisms/Card With TextField",
  component: FOCardWithTextField,
};

export default meta;

const Template: Story<IFOCardWithTextFieldProps> = props => (
  <Box maxWidth={560}>
    <FOCardWithTextField {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  title: "Forgot Password",
  subheader:
    "Please type your company email address and we’ll send an email notification with reset link to change your password.",
  form: (
    <FATextField
      css={{}}
      testID="input-signIn"
      required
      fullWidth
      variant="standard"
      type="email"
      label={"Company email"}
      placeholder="Input company email"
    />
  ),
  buttonSubmitLabel: "Send Reset Password Link",
};

export const WithActionAdornment = Template.bind({});

WithActionAdornment.args = {
  title: "Sign In",
  subheader: (
    <>
      To continue, please sign in to <b>Horizon</b> platform.
    </>
  ),
  form: (
    <FATextField
      css={{}}
      testID="input-signIn"
      required
      fullWidth
      variant="standard"
      type="email"
      label={"Company email"}
      placeholder="Input company email"
    />
  ),
  buttonSubmitLabel: "Sign In",
  actionStartAdornment: (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 1,
      }}
    >
      <FAButton variant="text" size="small" color="info" testID="button-card">
        Link
      </FAButton>
    </Box>
  ),
  actionEndAdornment: (
    <Box
      sx={{
        display: "flex",
        p: 1,
      }}
    >
      <FAButton variant="text" size="small" color="info" testID="button-card">
        Link
      </FAButton>
    </Box>
  ),
};
