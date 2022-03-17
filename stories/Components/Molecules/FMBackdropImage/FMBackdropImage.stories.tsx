import React, { useState } from "react";

import { FAButton } from "@Atoms";
import { FMBackdropImage } from "@Molecules";

import { DUMMY_COMPANY_IMAGE_URL } from "@Definitions/constants";

const story = {
  title: "Molecules/Backdrop Image",
  component: FMBackdropImage,
  argTypes: {
    children: { control: "text" },
  },
};

export default story;

export const Default = () => {
  const [openBackdropImage, setOpenBackdropImage] = useState(false);

  const handleClose = () => {
    setOpenBackdropImage(false);
  };

  const handleToggle = () => {
    setOpenBackdropImage(true);
  };
  return (
    <>
      <FAButton testID="button-toggle-backdrop-image" onClick={handleToggle}>
        Open Backdrop Image
      </FAButton>
      <FMBackdropImage
        open={openBackdropImage}
        handleClose={handleClose}
        testID="backdrop-image-stories"
      >
        <img src={DUMMY_COMPANY_IMAGE_URL} />
      </FMBackdropImage>
    </>
  );
};
