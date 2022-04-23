import { ReactNode } from "react";
import {
  DialogProps,
  DialogActionsProps,
  DialogContentProps,
} from "@mui/material";

import { IFAButtonProps } from "@Atoms/FAButton/FAButton.interface";

export interface IFMDialogConfirmationProps {
  testID: `dialog-${string}`;
  actionsProps?: Omit<DialogActionsProps, "sx" | "children">;
  contentProps?: Omit<DialogContentProps, "sx" | "children">;
  dialogProps?: Omit<DialogProps, "children">;
  children?: ReactNode;
  icon: "error" | "processing" | "success" | "warning" | string;
  onCloseIcon?: () => void;
  title: string;
  description: string | ReactNode;
  onCancelProps?: Omit<IFAButtonProps, "testID">;
  onConfirmProps?: Omit<IFAButtonProps, "testID">;
}
