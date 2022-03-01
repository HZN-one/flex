import React, { memo } from "react";
import { Avatar } from "@mui/material";
import { IFAAvatarProps } from "./FAAvatar.interface";

export const FAAvatar = memo((props: IFAAvatarProps) => {
  const { testID, ...materialUIProps } = props;

  return <Avatar data-testid={testID} {...materialUIProps} />;
});

FAAvatar.displayName = "FAAvatar";
