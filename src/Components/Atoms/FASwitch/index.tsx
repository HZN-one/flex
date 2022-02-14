import React, { memo } from "react";
import { Switch } from "@mui/material";
import { IFASwitch } from "./FASwitch.interface";

const defaultProps = {
  size: "small",
} as IFASwitch;

export const FASwitch = memo((props: IFASwitch) => {
  const { testID, size, ...materialUIProps } = { ...defaultProps, ...props };
  return <Switch data-testid={testID} size={size} {...materialUIProps} />;
});

FASwitch.displayName = "FASwitch";
