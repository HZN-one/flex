import React, { memo } from "react";
import { Switch } from "@mui/material";
import { IFASwitch } from "./FASwitch.interface";

export const FASwitch = memo((props: IFASwitch) => {
  const { testID, label, ...materialUIProps } = props;
  return <Switch data-testid={testID} {...materialUIProps} />;
});

FASwitch.displayName = "FASwitch";
