import React, { memo } from "react";
import { Backdrop } from "@mui/material";

import { IFMBackdropImage } from "./FMBackdropImage.interface";

export const FMBackdropImage = memo((props: IFMBackdropImage) => {
  const { testID, open, handleClose, children } = props;
  return (
    <Backdrop open={open} onClick={handleClose} data-testid={testID}>
      {children}
    </Backdrop>
  );
});

FMBackdropImage.displayName = "FMBackdropImage";
