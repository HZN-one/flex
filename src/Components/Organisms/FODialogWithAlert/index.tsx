import React, { memo } from "react";
import { Box } from "@mui/system";
import { FAIcon, FATypography } from "@Atoms";
import { FMDialog } from "@Molecules";

import { IFODialogWithAlertProps } from "./FODialogWithAlert.interface";

export const FODialogWithAlert = memo((props: IFODialogWithAlertProps) => {
  const { testID, children, icon, title, ...materialUIProps } = props;

  const iconProps = (iconName: string) => {
    switch (iconName) {
      case "error":
        return {
          icon: "close",
          color: "error",
          bgColor: "error.lightBg",
          fontSize: 32,
        };
      case "success":
        return {
          icon: "check",
          color: "success",
          bgColor: "success.lightBg",
          fontSize: 32,
        };
      case "processing":
        return {
          icon: "loop",
          bgColor: "inherit",
          color: "primary",
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
      {...materialUIProps}
      dialogProps={{
        fullWidth: true,
        maxWidth: "sm",
        ...materialUIProps.dialogProps,
      }}
    >
      <Box data-testid={testID} textAlign="center">
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
            color={iconProps(icon).color as any}
            fontSize="inherit"
          >
            {iconProps(icon).icon}
          </FAIcon>
        </Box>
        <FATypography
          testID="typography-dialog-alert-title"
          variant="h5"
          sx={{ mt: 2 }}
        >
          {title}
        </FATypography>
        {children && (
          <FATypography
            testID="typography-dialog-alert-children"
            variant="body1"
            sx={{ mt: 2 }}
          >
            {children}
          </FATypography>
        )}
      </Box>
    </FMDialog>
  );
});

FODialogWithAlert.displayName = "FODialogWithAlert";
