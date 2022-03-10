import { ReactNode } from "react";

export interface IFOCardWithTextFieldProps {
  testID: `card-textfield-${string}`;
  onSubmit?: React.FormEventHandler;
  form: ReactNode;
  title?: string;
  subheader?: ReactNode | string;
  noValidate?: boolean;
  buttonSubmitLabel: string;
  actionStartAdornment?: ReactNode;
  actionEndAdornment?: ReactNode;
}
