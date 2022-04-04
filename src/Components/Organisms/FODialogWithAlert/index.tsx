import React, { memo } from "react";
import { Box, Grid } from "@mui/material";
import { FAIcon, FATypography } from "@Atoms";
import { FMDialog } from "@Molecules";

import { IFODialogWithAlertProps } from "./FODialogWithAlert.interface";

export const FODialogWithAlert = memo((props: IFODialogWithAlertProps) => {
  const { testID, children, icon, onCloseIcon, title, ...materialUIProps } =
    props;

  const iconProps = (iconName: string) => {
    switch (iconName) {
      case "error":
        return {
          icon: "close",
          color: "error.main",
          bgColor: "error.lightBg",
          fontSize: 32,
        };
      case "success":
        return {
          icon: "check",
          color: "success.main",
          bgColor: "success.lightBg",
          fontSize: 32,
        };
      case "processing":
        return {
          icon: "loop",
          bgColor: "inherit",
          color: "primary.main",
          fontSize: 58.67,
        };
      default:
        return {
          icon: icon,
          bgColor: "inherit",
          color: "inherit",
          fontSize: 32,
        };
    }
  };

  return (
    <FMDialog
      testID="dialog-with-alert"
      onCloseIcon={onCloseIcon}
      {...materialUIProps}
      dialogProps={{
        fullWidth: true,
        maxWidth: "sm",
        ...materialUIProps.dialogProps,
      }}
    >
      <Grid data-testid={testID} container rowSpacing={2} textAlign="center">
        <Grid item xs={12}>
          <Box
            bgcolor={iconProps(icon).bgColor}
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize={iconProps(icon).fontSize}
            height={64}
            width={64}
            mx="auto"
          >
            <FAIcon
              testID="icon-dialog-with-alert"
              fontSize="inherit"
              sx={{
                color: iconProps(icon).color,
              }}
            >
              {iconProps(icon).icon}
            </FAIcon>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FATypography
            testID="typography-dialog-alert-title"
            component="span"
            variant="h5"
          >
            {title}
          </FATypography>
        </Grid>
        {children && (
          <Grid item xs={12}>
            <FATypography
              testID="typography-dialog-alert-children"
              component="span"
              variant="body1"
            >
              {children}
            </FATypography>
          </Grid>
        )}
      </Grid>
    </FMDialog>
  );
});

FODialogWithAlert.displayName = "FODialogWithAlert";
