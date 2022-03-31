import { ReactNode } from "react";
import { IFMDialogProps } from "@Molecules/FMDialog/FMDialog.interface";

export interface IFODialogWithAlertProps
  extends Pick<IFMDialogProps, "dialogProps" | "onCloseIcon"> {
  testID: `dialog-alert-${string}`;
  children?: ReactNode;
  icon: "error" | "processing" | "success" | string;
  title: string;
}
