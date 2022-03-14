import React, { memo, useState } from "react";

import { Box } from "@mui/material";

import { FAAvatar, FAButton } from "@Atoms";
import { FMBackdropImage } from "@Molecules/FMBackdropImage";

import { IFMViewPicture } from "./FMViewPicture.interface";

export const FMViewPicture = memo((props: IFMViewPicture) => {
  const { testID, label, avatar, button, children } = props;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Box data-testid={testID} sx={{ display: "flex", alignItems: "center" }}>
      <FAAvatar
        testID="avatar-profile-picture"
        sx={{ height: "90px", width: "90px", mr: 3 }}
        {...avatar}
      />
      <FAButton
        testID="button-view-logo"
        variant="outlined"
        color="secondary"
        size="small"
        onClick={handleToggle}
        {...button}
      >
        {label}
      </FAButton>
      <FMBackdropImage
        testID="backdrop-image-picture"
        sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        handleClose={handleClose}
      >
        {children}
      </FMBackdropImage>
    </Box>
  );
});

FMViewPicture.displayName = "FMViewPicture";
