import { ReactNode } from "react";
import {
  DialogProps,
  DialogActionsProps,
  DialogContentProps,
  DialogTitleProps,
} from "@mui/material";

export interface IFMDialogProps {
  testID: `dialog-${string}`;
  actionsProps?: Omit<DialogActionsProps, "sx">;
  contentProps?: Omit<DialogContentProps, "sx" | "children">;
  dialogProps: Omit<DialogProps, "children">;
  children: ReactNode;
  onCloseIcon?: () => void;
  titleProps?: Omit<DialogTitleProps, "sx">;
}
