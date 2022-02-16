import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

import { FAButton, FATextField } from "@Atoms";
import { IFOCardWithTextField } from "@Organisms/FOCardWithTextField/FOCardWithTextField.interfaces";
import { FOCardWithTextField } from "@Organisms/FOCardWithTextField";

const meta: Meta = {
  title: "Organisms/Card With TextField",
  component: FOCardWithTextField,
};

export default meta;

const Template: Story<IFOCardWithTextField> = props => (
  <Box maxWidth={560}>
    <FOCardWithTextField {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  title: "Sign In",
  subtitle: (
    <>
      To continue, please sign in to <b>Horizon</b> platform.
    </>
  ),
  form: (
    <Box height="80px" sx={{ m: "1 0" }}>
      <FATextField
        css={{}}
        testID="input-signIn"
        required
        fullWidth
        variant="standard"
        type="email"
        label={"Company email"}
        placeholder="Input company email"
        helperText="Password contains 8 alfanumeric characters with one capital (A-Z) and one special characters (!@#$%^&*.)"
      />
    </Box>
  ),
  firstLink: (
    <FAButton sx={{ mt: 2 }} variant="text" size="small" testID="button-card">
      Link
    </FAButton>
  ),
  secondLink: (
    <FAButton variant="text" size="small" testID="button-card">
      Link
    </FAButton>
  ),
};

export const withAction = Default.bind({});
withAction.args = {
  actions: (
    <FAButton variant="text" size="small" testID="button-card">
      Link
    </FAButton>
  ),
};
