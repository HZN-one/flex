import React, { memo } from "react";
import { Icon } from "@mui/material";
import { IIcon } from "./Icon.interface";

// it is mandatory to add these lines in html in order for the icon to appear
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Two+Tone"/>;

export const IconPegasus = memo((props: IIcon) => {
  const { testID, ...materialUIProps } = props;
  return <Icon data-testid={testID} {...materialUIProps} />;
});

IconPegasus.displayName = "IconPegasus";
