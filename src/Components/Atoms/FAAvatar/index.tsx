import React, { memo } from "react";
import { Avatar } from "@mui/material";
import { IFAAvatar } from "./FAAvatar.interface";

export const FAAvatar = memo((props: IFAAvatar) => {
  const { testID, ...materialUIProps } = props;

  return <Avatar data-testid={testID} {...materialUIProps} />;
});

FAAvatar.displayName = "FAAvatar";
