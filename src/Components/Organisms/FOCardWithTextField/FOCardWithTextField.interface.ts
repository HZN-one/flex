import { ReactNode } from "react";

import { IFAButtonProps } from "../../Atoms/FAButton/FAButton.interface";
import { ElementPosition } from "../../../Types";

export interface IFOCardWithTextFieldProps {
  testID: `card-textfield-${string}`;
  onSubmit?: React.FormEventHandler;
  form: ReactNode;
  title?: string;
  subheader?: ReactNode | string;
  noValidate?: boolean;
  buttonSubmitLabel: string;
  buttonSubmitState?: Pick<IFAButtonProps, "isLoading" | "disabled">;
  buttonSubmitStyle?: Pick<IFAButtonProps, "size"> & {
    position?: ElementPosition;
  };
  actionStartAdornment?: ReactNode;
  actionEndAdornment?: ReactNode;
}
