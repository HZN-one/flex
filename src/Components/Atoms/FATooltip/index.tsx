import React, { memo } from "react";
import { Tooltip } from "@mui/material";
import { IFATooltip } from "./FATooltip.interface";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  arrow: {
    color: theme.palette.grey[300],
  },
  tooltip: {
    backgroundColor: theme.palette.grey[300],
    color: "#221F20",
  },
}));

export const FATooltip = memo((props: IFATooltip) => {
  const { testID, title, ...materialUIProps } = props;
  let classes = useStyles();
  return (
    <Tooltip
      data-testid={testID}
      title={title}
      classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
      {...materialUIProps}
    >
      {props.children}
    </Tooltip>
  );
});

FATooltip.displayName = "FATooltip";
