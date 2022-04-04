import React, { memo } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FAIcon, FAIconButton } from "@Atoms";

import { IFMDialogProps } from "./FMDialog.interface";

export const FMDialog = memo((props: IFMDialogProps) => {
  const {
    testID,
    actionsProps,
    contentProps,
    dialogProps,
    children,
    onCloseIcon,
    titleProps,
  } = props;

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
      {titleProps && (
        <DialogTitle {...titleProps}>{titleProps.children}</DialogTitle>
      )}
      <DialogContent {...contentProps}>{children}</DialogContent>
      {actionsProps && <DialogActions {...actionsProps} />}
    </Dialog>
  );
});

FMDialog.displayName = "FMDialog";
