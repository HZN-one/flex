import React from "react";
import { Meta, Story } from "@storybook/react";
import { Box, Link } from "@mui/material";

import { FOCardWithImage } from "@Organisms/FOCardWithImage";

import { DUMMY_IMAGE_URL } from "@Definitions/constants";

import { IFOCardWithImageProps } from "@Organisms/FOCardWithImage/FOCardWithImage.interface";

const meta: Meta = {
  title: "Organisms/Card With Image",
  component: FOCardWithImage,
};

export default meta;

const Template: Story<IFOCardWithImageProps> = props => (
  <Box maxWidth={408}>
    <FOCardWithImage {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  image: <img src={DUMMY_IMAGE_URL} />,
  imagePosition: "center",
  header: {
    title: "Card With Image Title",
    subheader: "Card With Image Subheader",
  },
  buttonPrimary: {
    children: "Default",
  },
  buttonPrimaryPosition: "center",
};

export const NoButton = Template.bind({});

NoButton.args = {
  image: <img src={DUMMY_IMAGE_URL} />,
  imagePosition: "center",
  header: {
    title: "Card With Image Title",
    subheader: "Card With Image Subheader",
  },
};

export const Controlled = Template.bind({});

Controlled.args = {
  control: {
    label: "Card Control Label",
    isChecked: true,
  },
  image: <img src={DUMMY_IMAGE_URL} />,
  imagePosition: "center",
  header: {
    title: "Card With Image Title",
    subheader: "Card With Image Subheader",
  },
};

export const WithActionAdornment = Template.bind({});

WithActionAdornment.args = {
  image: <img src={DUMMY_IMAGE_URL} />,
  imagePosition: "center",
  header: {
    title: "Card With Image Title",
    subheader: "Card With Image Subheader",
  },
  buttonPrimary: {
    children: "Button Label",
    fullWidth: true,
  },
  actionEndAdornment: (
    <Box mt={2}>
      <Link color="info.main" underline="hover" variant="bodySemiBold2">
        Link
      </Link>
    </Box>
  ),
};

export const CompleteCardWithImage = Template.bind({});

CompleteCardWithImage.args = {
  control: {
    label: "Card Control Label",
    isChecked: true,
  },
  image: <img src={DUMMY_IMAGE_URL} />,
  imagePosition: "center",
  header: {
    title: "Card With Image Title",
    subheader: "Card With Image Subheader",
  },
  buttonPrimary: {
    children: "Button Primary Label",
    fullWidth: true,
  },
  buttonSecondary: {
    children: "Button Secondary Label",
    fullWidth: true,
  },
  actionEndAdornment: (
    <Box mt={2}>
      <Link color="info.main" underline="hover" variant="bodySemiBold2">
        Link
      </Link>
    </Box>
  ),
};

export const OutlinedCard = Template.bind({});

OutlinedCard.args = {
  image: <img src={DUMMY_IMAGE_URL} />,
  imagePosition: "center",
  header: {
    title: "Card With Image Title",
    subheader: "Card With Image Subheader",
  },
  buttonPrimary: {
    children: "Default",
  },
  buttonPrimaryPosition: "center",
  variant: "outlined",
  isSelected: true,
};
