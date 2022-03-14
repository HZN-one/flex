import React from "react";

import { FMViewPicture } from "@Molecules";
import { Meta } from "@storybook/react";

import { DUMMY_COMPANY_IMAGE_URL } from "@Definitions/constants";

const meta: Meta = {
  title: "Molecules/View Picture",
  component: FMViewPicture,
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;

export const Default = () => {
  return (
    <>
      <FMViewPicture label="Show Profile Picture" testID="view-picture-stories">
        <img src={DUMMY_COMPANY_IMAGE_URL} alt="dummy" />
      </FMViewPicture>
    </>
  );
};
