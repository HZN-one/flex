import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box, Stack } from "@mui/material";

import { FAButton, FATextField, FATypography } from "@Atoms";
import { IFOCardWithTextFieldProps } from "@Organisms/FOCardWithTextField/FOCardWithTextField.interface";
import { FOCardWithTextField } from "@Organisms/FOCardWithTextField";

const meta: Meta = {
  title: "Organisms/Card With TextField",
  component: FOCardWithTextField,
};

export default meta;

const form = (
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
);

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
  form,
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
  form,
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

export const withButtonSubmitCustomization = Template.bind({});

withButtonSubmitCustomization.decorators = [
  StoryDecoractors => (
    <>
      <Stack spacing={3}>
        <Box>
          <FATypography testID="typography-button-loading" variant="h5" mb={2}>
            Loading
          </FATypography>
          {StoryDecoractors({
            args: {
              testID: "card-textfield-button-login",
              buttonSubmitState: { isLoading: true },
              form,
              buttonSubmitLabel: "Sign In",
            },
          })}
        </Box>
        <Box>
          <FATypography testID="typography-button-styled" variant="h5" mb={2}>
            Styled
          </FATypography>
          {StoryDecoractors({
            args: {
              testID: "card-textfield-button-styled",
              form,
              buttonSubmitLabel: "Register",
              buttonSubmitStyle: {
                size: "small",
                position: "end",
              },
            },
          })}
        </Box>
      </Stack>
    </>
  ),
];
