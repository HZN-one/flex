import React from "react";

import { FMViewPicture } from "@Molecules";

import { DUMMY_COMPANY_IMAGE_URL } from "@Definitions/constants";

const story = {
  title: "Molecules/View Picture",
  component: FMViewPicture,
  argTypes: {
    children: { control: "text" },
  },
};

export default story;

export const Default = () => {
  return (
    <>
      <FMViewPicture
        label="Show Profile Picture"
        testID="view-picture-stories"
        img={{
          src: DUMMY_COMPANY_IMAGE_URL,
          alt: "dummy",
        }}
      />
    </>
  );
};
