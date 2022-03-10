import { ReactNode } from "react";

import { IFAButtonProps } from "../../Atoms/FAButton/FAButton.interface";

export interface IFOCardWithTextFieldProps {
  testID: `card-textfield-${string}`;
  onSubmit?: React.FormEventHandler;
  form: ReactNode;
  title?: string;
  subheader?: ReactNode | string;
  noValidate?: boolean;
  buttonSubmitLabel: string;
  buttonSubmitState?: Pick<IFAButtonProps, "isLoading" | "disabled">;
  actionStartAdornment?: ReactNode;
  actionEndAdornment?: ReactNode;
}
