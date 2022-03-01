import React, { memo } from "react";
import { Switch } from "@mui/material";
import { IFASwitchProps } from "./FASwitch.interface";

export const FASwitch = memo((props: IFASwitchProps) => {
  const { testID, ...materialUIProps } = props;
  return <Switch data-testid={testID} {...materialUIProps} />;
});

FASwitch.displayName = "FASwitch";
