import React, { memo } from "react";
import { FAIcon, FAIconButton, FATypography, FAButton } from "@Atoms";
import { Dialog, DialogActions, DialogContent, Box } from "@mui/material";

import { IFMDialogConfirmationProps } from "./FMDialogConfirmation.interface";

export const FMDialogConfirmation = memo(
  (props: IFMDialogConfirmationProps) => {
    const {
      testID,
      actionsProps,
      contentProps,
      dialogProps,
      description,
      icon,
      onCloseIcon,
      title,
      onCancelProps,
      onConfirmProps,
    } = props;

    const iconProps = (iconName: string) => {
      switch (iconName ?? "warning") {
        case "error":
          return {
            icon: "close",
            color: "error.main",
            bgColor: "error.lightBg",
            fontSize: 25,
          };
        case "success":
          return {
            icon: "check",
            color: "success.main",
            bgColor: "success.lightBg",
            fontSize: 25,
          };
        case "processing":
          return {
            icon: "loop",
            bgColor: "inherit",
            color: "primary.main",
            fontSize: 25,
          };
        case "warning":
          return {
            icon: "warning_amber",
            bgColor: "warning.lightBg",
            color: "warning.main",
            fontSize: 25,
          };
        default:
          return {
            icon: icon,
            bgColor: "inherit",
            color: "inherit",
            fontSize: 25,
          };
      }
    };

    const Actions = () => {
      if (onCancelProps || onConfirmProps) {
        return (
          <DialogActions {...actionsProps}>
            {onCancelProps && (
              <FAButton
                variant="text"
                size="small"
                color="secondary"
                testID="button-dialog-confirmation-cancel"
                {...onCancelProps}
              >
                {onCancelProps.children}
              </FAButton>
            )}
            {onConfirmProps && (
              <FAButton
                variant="contained"
                size="small"
                color="primary"
                testID="button-dialog-confirmation-confirm"
                {...onConfirmProps}
              >
                {onConfirmProps.children}
              </FAButton>
            )}
          </DialogActions>
        );
      } else {
        return null;
      }
    };

    return (
      <Dialog
        data-testid={testID}
        aria-describedby={testID}
        aria-labelledby={testID}
        {...dialogProps}
      >
        {onCloseIcon && (
          <FAIconButton
            testID="icon-button-close-dialog"
            className="flex-close-dialog"
            onClick={onCloseIcon}
          >
            <FAIcon testID="icon-close-dialog">close</FAIcon>
          </FAIconButton>
        )}
        <DialogContent {...contentProps}>
          <Box display="flex">
            <Box
              bgcolor={iconProps(icon).bgColor}
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize={iconProps(icon).fontSize}
              height={50}
              width={50}
              mr={2}
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
            <Box>
              <Box mb={0.5}>
                <FATypography
                  variant="subtitleBold"
                  testID="typography-dialog-confirmation-title"
                  letterSpacing="0.2px"
                >
                  {title}
                </FATypography>
              </Box>
              <Box maxWidth="390px" width="100%">
                {typeof description === "string" ? (
                  <FATypography
                    variant="body2"
                    testID="typography-dialog-confirmation-description"
                  >
                    {description}
                  </FATypography>
                ) : (
                  <>{description}</>
                )}
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <Actions />
      </Dialog>
    );
  }
);

FMDialogConfirmation.displayName = "FMDialogConfirmation";
